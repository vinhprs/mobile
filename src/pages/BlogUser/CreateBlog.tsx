import React, { useRef, useState } from 'react';
import SunEditor from 'suneditor-react';
import { buttonList, createBlogProps } from '../../utils/type';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createBlog } from '../../schema/schema';
import TabInput from '../../components/TagInput/TabInput';
import { Button } from '@chakra-ui/react';
const CreateBlog = () => {
  const [tags, setTags] = useState(['Nodejs','ReactJs']);

  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  const [valuesDesc, setValuesDesc] = useState('');
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const {handleSubmit,register,getValues,setValue,formState:{errors, isSubmitting}} = useForm<createBlogProps>({
    defaultValues:{
      title:'',
      desc:'',
      tag:[],
    },
    resolver:yupResolver(createBlog)
  });
  const handleChangeTitle = (value:any)=>{
    setValue('title',value);
  };
  const handleChangeDesc = (value:any)=>{
    setValue('desc',value);
  };
  return (
    <form className='flex flex-col gap-4'>
      <div>
        <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Tiêu đề</div>
        <div>
          <SunEditor
            setOptions={{
              katex:katex,
              buttonList: buttonList,
            }}
            defaultValue={getValues('title')}
            onChange={handleChangeTitle}
            getSunEditorInstance={getSunEditorInstance}
            height=""
            width="100%"
          />
        </div>
      </div>
      <div>
        <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Tag</div>
        <TabInput tags={tags} setTags={setTags}/>
      </div>
      <div>
        <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Viết bài</div>
        <div>
          <SunEditor
            setOptions={{
              katex:katex,
              buttonList: buttonList,
            }}
            defaultValue={getValues('desc')}
            onChange={handleChangeDesc}
            getSunEditorInstance={getSunEditorInstance}
            height="400px"
            width="100%"
          />
        </div>
      </div>
      <Button
        bg="#FF6636"
        color="#ffffff"
        fontSize="14px"
        _hover={{
          bg: '#f85b2b',
        }}
      >Tạo bài viết</Button>
    </form>
  );
};

export default CreateBlog;