import React, { useRef, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import ReactQuill from "react-quill";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  updateArray,
  updateIndex,
} from "../../../store/reducers/createCourseSlice";
import { toolbarOptions } from "../../../utils/type";
import imgFade from "../../../image/CreateCourse/Icon.jpg";
import "react-quill/dist/quill.snow.css";

const FormAdvance = () => {
  const dispatch = useAppDispatch();
  const refImage = useRef<any>(null);
  const [image, setImage] = useState<any>("");
  const [valueDesc, setValueDesc] = useState("");
  console.log(valueDesc);

  const handleImageClick = () => {
    refImage?.current.click();
  };
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file);

    setImage(file);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(updateIndex(2));
    dispatch(updateArray(2));
  };
  return (
    <form onSubmit={onSubmit}>
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
              <div
                onClick={handleImageClick}
                className="bg-[#FFEEE8] cursor-pointer w-fit flex items-center gap-x-[12px] h-[48px] px-[24px]"
              >
                <button className="font-semibold text-[16px] text-[#FF6636]">
                  Tải ảnh lên
                </button>
                <BsCloudUpload className="text-[20px] text-[#FF6636]" />
                <input
                  type="file"
                  ref={refImage}
                  name=""
                  id=""
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="font-medium text-[18px] text-[#1D2026] ">
            Mô tả chi tiết khóa học
          </span>
          <div>
            <ReactQuill
              theme="snow"
              value={valueDesc}
              onChange={setValueDesc}
              modules={{
                toolbar: toolbarOptions,
              }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-[14px] h-[48px] px-[24px] font-semibold text-white bg-[#FF6636] hover:bg-[#fe5a27]"
          >
            Lưu và tiếp tục
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormAdvance;
