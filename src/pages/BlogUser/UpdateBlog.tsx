import React, { useEffect, useRef, useState } from 'react';
import SunEditor from 'suneditor-react';
import { buttonList, createBlogProps } from '../../utils/type';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createBlog } from '../../schema/schema';
import TabInput from '../../components/TagInput/TabInput';
import { Button, useToast } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useAppDispatch } from '../../hooks/appHooks';
import { getDetailAction, updateBloglAction } from '../../store/actions/blog.action';
const UpdateBlog = ({isOpen, onClose,item,getListBlog}:any) => {
  const toast = useToast();
  const [tags, setTags] = useState(item?.tags);
  const [detailBlog, setDetailBlog] = useState<any>();
  const dispatch = useAppDispatch();
  const getDetailBlog = async(id:any)=>{
    const res:any = await dispatch(getDetailAction(String(id)));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getDetailBlog ~ res:', res);
      setDetailBlog(res?.payload?.data);
      // getListlBlogTags(res?.payload?.data?.tags);
    }
  };
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
      title:item?.title && parse(item?.title),
      desc:item?.content && parse(item?.content),
      tag:[],
      previewContent:item?.previewContent && parse(item?.previewContent)
    },
    
    resolver:yupResolver(createBlog)
  });
  const handleChangeTitle = (value:any)=>{
    setValue('title',value);
  };
  const handleChangeDesc = (value:any)=>{
    setValue('desc',value);
  };
  const handleChangePreviewContent = (value:any) => {
    console.log('🚀 ~ handleChangeDesc ~ value:', value);
    
    setValue('previewContent',value);
  };
  const handleSubmitUpdate = async(e:any)=>{
    e.preventDefault();
    const payload = {
      id:item?._id,
      params:{
        title:getValues('title'),
        tags:tags,
        content:getValues('desc'),
        previewContent:getValues('previewContent')
      }
    };
    try{
      const res = await dispatch(updateBloglAction(payload));
      if(res.meta.requestStatus === 'fulfilled'){
        console.log('🚀 ~ handleSubmitUpdate ~ res:', res);
        getListBlog();
        onClose();
        toast({
          title: 'Cập nhập thành công',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position:'top-right'
        });
      }
    }catch(e:any){
      console.log('🚀 ~ handleSubmitUpdate ~ e:', e);
      toast({
        title: 'Cập nhập không thành công',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:'top-right'
      });
    }
  };
  useEffect(()=>{
    getDetailBlog(item?._id);
    
  },[item]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cập nhập bài viết</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form className='flex flex-col gap-4' onSubmit={handleSubmitUpdate}>
            <div>
              <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Tiêu đề</div>
              <div>
                <SunEditor
                  setOptions={{
                    katex:katex,
                    buttonList: buttonList,
                  }}
                  defaultValue={detailBlog?.title && detailBlog?.title}
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
            <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Preview bài viết</div>
            <div>
              <SunEditor
                setOptions={{
                  katex:katex,
                  buttonList: buttonList,
                }}
                defaultValue={detailBlog?.previewContent && detailBlog?.previewContent}
                onChange={handleChangePreviewContent}
                getSunEditorInstance={getSunEditorInstance}
                height="150px"
                width="100%"
              />
            </div>
            <div>
              <div className="text-[20px] text-[#FF6636] font-semibold mb-[10px]">Viết bài</div>
              <div>
                <SunEditor
                  setOptions={{
                    katex:katex,
                    buttonList: buttonList,
                  }}
                  defaultValue={detailBlog?.content && detailBlog?.content}
                  onChange={handleChangeDesc}
                  getSunEditorInstance={getSunEditorInstance}
                  height="300px"
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
              type='submit'
            >Tạo bài viết</Button>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button bg="#FF6636" mr={3} onClick={onClose} color="white">
              Đóng
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    
  );
};

export default UpdateBlog;