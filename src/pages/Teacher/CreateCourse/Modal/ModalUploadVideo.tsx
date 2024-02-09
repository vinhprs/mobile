import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { updateLectureType } from '../../../../store/reducers/createCourseSlice';
import { uploadVideo } from '../../../../store/actions/course.action';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { FaUpload } from 'react-icons/fa6';
const ModalUploadVideo = ({
  isOpen,
  onClose,
  lectures,
  // setSections,
  itemLecture,
  sections,
  index,
  indexLecture,
}: any) => {
  const dispatch = useAppDispatch();
  const refVideo = useRef<any>(null);
  const [value, setValue] = useState<any|null>(null);
  const [loading,setLoading] = useState(false);
  const handleImageClick = () => {
    refVideo?.current.click();
  };
  const handleSubmit = async() => {
    // const update = sections.map((section: any, indexSection: any) => {
    //   if (index === indexSection) {
    //     section.lectures = section.lectures.map(
    //       (lecture: any, indexLec: any) => {
    //         if (indexLecture === indexLec) {
    //           lecture.lectureType = "VIDEO";
    //           lecture.url = value;
    //         }
    //         return lecture;
    //       }
    //     );
    //   }
    //   return section;
    // });
    // setSections(update);
    console.log(value);
    const formData = new FormData();
    formData.append('file', value);
    formData.append('slug', itemLecture.slug);
    const res = await dispatch(uploadVideo(formData));
    setLoading(true);
    if(res.meta.requestStatus==='fulfilled' && res.payload){
      console.log(res);
      setLoading(false);
      dispatch(
        updateLectureType({
          sectionIndex: index,
          lectureIndex: indexLecture,
          value: 'VIDEO',
          urlValue: value.name
        })
      );
      onClose();
    }
  };
  console.log(value);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="18px" color="#1D2026">
            Đăng tải video
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-y-2 items-center" onClick={handleImageClick}>
              {value ? <div>{value?.name}</div> : 
                <FaUpload className="text-[60px] text-[#FF6636] text-center animate-bounce"/>
              }
              <button className="flex justify-center gap-x-2 bg-[#FF6636] px-[16px] py-[8px] text-white">
                <span className="text-[16px]">Tải video lên</span>
                <IoCloudUploadOutline className="text-[24px]"/>
              </button>
              <input
                ref={refVideo}
                type="file"
                onChange={(e) => setValue(e.target.files && e.target.files[0])}
                className="w-full px-[18px] py-[13px] border-[1px] text-[#1D2026] border-[#E9EAF0] outline-none placeholder:text-[#8C94A3] hidden"
                placeholder="Link url..."
                accept="video/*"
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex justify-between w-full">
              <Button onClick={onClose}>Đóng</Button>
              <Button
                onClick={handleSubmit}
                bg="#FF6636"
                color="white"
                _hover={{ bg: '#fb5a2a' }}
                isLoading={loading}
              >
                Lưu
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalUploadVideo;
