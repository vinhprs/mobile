import { Button, useToast } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import SunEditor from 'suneditor-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { STATUS_BLOG, buttonList } from '../../../utils/type';
import { useAppDispatch } from '../../../hooks/appHooks';
import { approveBlogAction } from '../../../store/actions/blog.action';
const CheckBlog = ({id,setShowReason}:any) => {
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
  const handleChangeTitle = async(data:any)=>{
    setValuesDesc(data);
  };
  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    const payload = {
      '_id':id,
      'status':STATUS_BLOG.DECLINED,
      'declineReason':valuesDesc
    };
    try{
      const res = await dispatch(approveBlogAction(payload));
      if(res.meta.requestStatus === 'fulfilled'){
        console.log('🚀 ~ approveBlog ~ res:', res);
        setShowReason(false);
        setValuesDesc('');
        toast({
          title: 'Không qua được kiểm duyệt',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position:'top-right'
        });
      }
    }catch(e:any){
      console.log('🚀 ~ approveBlog ~ e:', e);
      
    }
  };
  return (
    <form className='mt-[20px]' onSubmit={handleSubmit}>
      <h1 className='text-[18px] font-semibold mb-[10px]'>Lý do không được kiểm duyệt</h1>
      <div className='mb-[10px]'>
        <SunEditor
          setOptions={{
            katex:katex,
            buttonList: buttonList,
          }}
          defaultValue={valuesDesc}
          onChange={handleChangeTitle}
          getSunEditorInstance={getSunEditorInstance}
          height="150px"
          width="100%"
        />
      </div>
      <Button
        bg="#ef4444"
        color="#ffffff"
        fontSize="14px"
        _hover={{
          bg: '#ef4445',
        }}
        type='submit'
      >Đăng</Button>
    </form>
  );
};

export default CheckBlog;