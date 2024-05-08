import React, { useRef, useState } from 'react';
import SunEditor from 'suneditor-react';
import { buttonList, createBlogProps } from '../../utils/type';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createBlog } from '../../schema/schema';
import TabInput from '../../components/TagInput/TabInput';
import { Button, useToast } from '@chakra-ui/react';
import { createBlogAction } from '../../store/actions/blog.action';
import { useAppDispatch } from '../../hooks/appHooks';
const CreateBlog = ({setOpenCreate,getListBlog}:any) => {
  const [tags, setTags] = useState([]);
  const toast = useToast();
  const dispatch = useAppDispatch();
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
      previewContent:'',
      tag:[],
    },
    resolver:yupResolver(createBlog)
  });
  const handleChangeTitle = (value:any)=>{
    setValue('title',value);
  };
  const handleChangeDesc = (value:any) => {
    console.log('🚀 ~ handleChangeDesc ~ value:', value);
    
    setValue('desc',value);
  };
  const handleChangePreviewContent = (value:any) => {
    console.log('🚀 ~ handleChangeDesc ~ value:', value);
    
    setValue('previewContent',value);
  };
  const handleOnSubmit = async(e:any)=>{
    e.preventDefault();
    const payload = {
      title:getValues('title'),
      tags:tags,
      content:getValues('desc'),
      previewContent:getValues('previewContent')
    };
    try{
      const res = await dispatch(createBlogAction(payload));
      console.log('🚀 ~ handleOnSubmit ~ res:', res);
      setValue('desc','');
      setValue('previewContent','');
      setValue('title','');
      setTags([]);
      setOpenCreate(false);
      getListBlog();
      toast({
        title: 'Tạo bài viết thành công',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:'top-right'
      });
    }catch(e:any){
      console.log('🚀 ~ handleOnSubmit ~ e:', e);
      toast({
        title: 'Tạo bài viết thất bại',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position:'top-right'
      });
    }
  };
  return (
    <form className='flex flex-col gap-4' onSubmit={handleOnSubmit}>
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
            height="150px"
            width="100%"
          />
        </div>
      </div>
      <div>
        <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Tag</div>
        <TabInput tags={tags} setTags={setTags}/>
      </div>
      <div>
        <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Preview bài viết</div>
        <div>
          <SunEditor
            setOptions={{
              katex:katex,
              buttonList: buttonList,
            }}
            defaultValue={getValues('previewContent')}
            onChange={handleChangePreviewContent}
            getSunEditorInstance={getSunEditorInstance}
            height="150px"
            width="100%"
          />
        </div>
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
        type='submit'
        _hover={{
          bg: '#f85b2b',
        }}
      >Tạo bài viết</Button>
    </form>
  );
};

export default CreateBlog;