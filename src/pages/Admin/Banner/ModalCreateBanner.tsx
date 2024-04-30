import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import imgFade from '../../../image/CreateCourse/Icon.jpg';
import { BsCloudUpload } from 'react-icons/bs';
import SunEditor from 'suneditor-react';
import { buttonList } from '../../../utils/type';
import 'suneditor/dist/css/suneditor.min.css';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { convertBase64 } from '../../../utils/lib';
import { useAppDispatch } from '../../../hooks/appHooks';
import { uploadFile } from '../../../store/actions/course.action';
import { updateThumbnail } from '../../../store/reducers/createCourseSlice';
const ModalCreateBanner = ({isOpen, onClose}:any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const dispatch = useAppDispatch();
  const [valueDesc, setValueDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>('');
  const refImage = useRef<any>(null);
  const handleImageClick = () => {
    refImage?.current.click();
  };
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    setImage(file);
    const formData = new FormData();
    formData.append('file', file);
    const res: any = await dispatch(uploadFile(formData));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      console.log(res.payload?.data?.url);
    //   dispatch(updateThumbnail(res.payload?.data?.url));
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'4xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tạo Banner</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          
          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-[18px] text-[#1D2026]">
            Ảnh banner
            </span>
            <div className="grid grid-cols-[200px_1fr] gap-x-5">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="w-full h-[142px] object-cover"
                />
              ) : (
                <img
                  src={imgFade}
                  alt=""
                  className="w-full h-[142px] object-cover"
                />
              )}
              {/* <img src={image ? URL.createObjectURL(image) : imgFade} alt="" /> */}
              <div className="text-[14px]">
                <p className="mb-[24px] text-[#6E7485]">
                Tải lên hình thu nhỏ khóa học của bạn ở đây.{' '}
                  <span className="text-[#1D2026] font-medium">
                  Nguyên tắc quan trọng
                  </span>
                : 1200x800 pixel hoặc tỷ lệ 12:8. Định dạng được hỗ trợ:{' '}
                  <span className="text-[#1D2026] font-medium">
                  .jpg, .jpeg hoặc .png
                  </span>
                </p>
                <div className="flex gap-x-8">
                  <div
                    onClick={handleImageClick}
                    className="bg-[#FFEEE8] cursor-pointer w-fit flex items-center gap-x-[12px] h-[48px] px-[24px]"
                  >
                    <button
                      type="button"
                      className="font-semibold text-[16px] text-[#FF6636]"
                    >
                    Tải ảnh lên
                    </button>
                    <BsCloudUpload className="text-[20px] text-[#FF6636]" />
                    <input
                      type="file"
                      ref={refImage}
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="font-medium text-[18px] text-[#1D2026] ">
            Tiêu đề banner
            </span>
            <div>
              <SunEditor
                setOptions={{
                  katex: katex,
                  buttonList: buttonList,
                }}
                // onChange={onEditorStateChange}
                getSunEditorInstance={getSunEditorInstance}
                height="100px"
              />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button bg="#FF6636" mr={3} onClick={onClose} color="white">
              Đóng
          </Button>
          <Button variant='ghost'>Tạo banner</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  );
};

export default ModalCreateBanner;