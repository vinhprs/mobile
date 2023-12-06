import React, { useRef, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import ReactQuill from "react-quill";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  updateArray,
  updateDesc,
  updateIndex,
  updateThumbnail,
} from "../../../store/reducers/createCourseSlice";
import { buttonList, toolbarOptions } from "../../../utils/type";
import imgFade from "../../../image/CreateCourse/Icon.jpg";
import "react-quill/dist/quill.snow.css";
import { Button } from "@chakra-ui/react";
import { uploadFile } from "../../../store/actions/course.action";
import SunEditor from "suneditor-react";
import suneditor from "suneditor";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";
import { convertBase64 } from "../../../utils/lib";
const FormAdvance = () => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const dispatch = useAppDispatch();
  const refImage = useRef<any>(null);
  const [image, setImage] = useState<any>("");
  const [valueDesc, setValueDesc] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(valueDesc);
  // const convertBase64 = (file: any) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };
  const handleImageClick = () => {
    refImage?.current.click();
  };
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    setImage(file);
    const formData = new FormData();
    formData.append("file", file);
    const res: any = await dispatch(uploadFile(formData));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      console.log(res.payload?.data?.url);
      dispatch(updateThumbnail(res.payload?.data?.url));
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      desc: "",
    },
  });
  const onEditorStateChange = (editorState: any) => {
    setValue("desc", editorState);
  };
  const editorContent = watch("emailContent");
  const onSubmit = async (data: any) => {
    setTimeout(() => {
      dispatch(updateIndex(2));
      dispatch(updateArray(2));
      dispatch(updateDesc(data.desc));
      // dispatch(updateThumbnail(image));
      setLoading(false);
    }, 2000);
    setLoading(true);
    console.log(data);
  };
  // const uploadImage = async () => {
  //   const formData = new FormData();
  //   formData.append("file", image);
  //   const res: any = await dispatch(uploadFile(formData));
  //   if (res.meta.requestStatus === "fulfilled" && res.payload) {
  //     console.log(res.payload?.data?.url);
  //     dispatch(updateThumbnail(res.payload?.data?.url));
  //   }
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-3">
          <span className="font-medium text-[18px] text-[#1D2026]">
            Ảnh bìa
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
                Tải lên hình thu nhỏ khóa học của bạn ở đây.{" "}
                <span className="text-[#1D2026] font-medium">
                  Nguyên tắc quan trọng
                </span>
                : 1200x800 pixel hoặc tỷ lệ 12:8. Định dạng được hỗ trợ:{" "}
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
            Mô tả chi tiết khóa học
          </span>
          <div>
            <SunEditor
              setOptions={{
                katex: katex,
                buttonList: buttonList,
              }}
              onChange={onEditorStateChange}
              getSunEditorInstance={getSunEditorInstance}
              height="100px"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            isLoading={loading}
            fontSize="14px"
            height="48px"
            px="24px"
            fontWeight={600}
            color="white"
            bg="#FF6636"
            _hover={{ bg: "#fe5a27" }}
            borderRadius="none"
            // className="text-[14px] h-[48px] px-[24px] font-semibold text-white bg-[#FF6636] hover:bg-[#fe5a27]"
          >
            Lưu và tiếp tục
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormAdvance;
