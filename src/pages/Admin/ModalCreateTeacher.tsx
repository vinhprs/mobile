import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  RadioGroup,
  Stack,
  Radio,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Textarea,
} from "@chakra-ui/react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/appHooks";
import { getSubjects } from "../../store/actions/user.action";
import { createTeacherAccount } from "../../store/actions/admin.action";
import { convertBase64 } from "../../utils/lib";
import { uploadFile } from "../../store/actions/course.action";
import { BsUpload } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTeacher } from "../../schema/schema";
interface CreateTeacher {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPass: string;
  date: Date;
  gender: string;
  subject: Array<number>;
  desc: string;
  avatar: string;
}
const ModalCreateTeacher = ({
  isOpen,
  onClose,
  getAccountStudentList,
}: any) => {
  const dispatch = useAppDispatch();
  const [subjects, setSubjects] = useState<any>([]);
  const [image, setImage] = useState<any>("");

  const [subjectValue, setSubjectValue] = useState("Môn học");
  const input = useRef<any>(null);

  const {
    register,
    setValue,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<CreateTeacher>({
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPass: "",
      date: new Date(),
      gender: "",
      subject: [],
      desc: "",
      avatar: "",
    },
    resolver: yupResolver(createTeacher),
  });
  console.log("🚀 ~ file: ModalCreateTeacher.tsx:68 ~ errors:", errors);

  const handleImageClick = () => {
    input?.current.click();
  };
  const getAllSubject = async () => {
    const res: any = await dispatch(getSubjects({}));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      setSubjects(res?.payload?.data);
    }
  };
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
    const base64 = await convertBase64(file);
    const formData = new FormData();
    formData.append("file", file);
    const res: any = await dispatch(uploadFile(formData));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      console.log(res.payload?.data?.url);
      setValue("avatar", res.payload?.data?.url);
      // setImage(res.payload?.data?.url);

      // dispatch(updateThumbnail(res.payload?.data?.url));
    }
  };
  useEffect(() => {
    getAllSubject();
  }, []);
  const handleClick = (subject: string, id: number) => {
    setSubjectValue(subject);
    const newArray = [id];
    setValue("subject", newArray);
  };
  const onSubmit = async (data: CreateTeacher) => {
    const payload = {
      fullname: data.fullname,
      birthDate: data.date,
      gender: data.gender === "Name" ? true : false,
      subjects: data.subject,
      username: data.username,
      email: data.email,
      password: data.password,
      memo: data.desc,
      avatar: data.avatar,
      role: "TEACHER",
    };
    const res = await dispatch(createTeacherAccount(payload));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      onClose();
      getAccountStudentList();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Tạo tài khoản cho giáo viên</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-y-4">
              <div>
                <InputGroup>
                  <InputLeftAddon w="200px" children="Họ và tên" />
                  <Input
                    {...register("fullname")}
                    type="text"
                    placeholder="Nguyễn Văn A"
                    outline="none"
                    _focusVisible={{
                      borderColor: "#FF6636",
                    }}
                  />
                </InputGroup>
                {errors.fullname && (
                  <span className="text-[14px] text-red-500">
                    {errors.fullname.message}
                  </span>
                )}
              </div>
              <div>
                <InputGroup>
                  <InputLeftAddon w="200px" children="Username" />
                  <Input
                    {...register("username")}
                    type="text"
                    placeholder="Nguyễn Văn A"
                    outline="none"
                    _focusVisible={{
                      borderColor: "#FF6636",
                    }}
                  />
                </InputGroup>
                {errors.username && (
                  <span className="text-[14px] text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div>
                <InputGroup>
                  <InputLeftAddon w="200px" children="Email" />
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="kieg@gmail.com"
                    outline="none"
                    _focusVisible={{
                      borderColor: "#FF6636",
                    }}
                  />
                </InputGroup>
                {errors.email && (
                  <span className="text-[14px] text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <InputGroup>
                  <InputLeftAddon w="200px" children="Mật khẩu" />
                  <Input
                    {...register("password")}
                    type="password"
                    // placeholder="kieg@gmail.com"
                    outline="none"
                    _focusVisible={{
                      borderColor: "#FF6636",
                    }}
                  />
                </InputGroup>
                {errors.password && (
                  <span className="text-[14px] text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <InputGroup>
                  <InputLeftAddon w="200px" children="Xác nhận mật khẩu" />
                  <Input
                    {...register("confirmPass")}
                    type="password"
                    // placeholder="kieg@gmail.com"
                    outline="none"
                    _focusVisible={{
                      borderColor: "#FF6636",
                    }}
                  />
                </InputGroup>
                {errors.confirmPass && (
                  <span className="text-[14px] text-red-500">
                    {errors.confirmPass.message}
                  </span>
                )}
              </div>
              <div>
                <InputGroup>
                  <InputLeftAddon w="200px" children="Ngày sinh" />
                  <Input
                    {...register("date")}
                    type="date"
                    // placeholder="Nguyễn Văn A"
                    outline="none"
                    _focusVisible={{
                      borderColor: "#FF6636",
                    }}
                  />
                </InputGroup>
                {errors.date && (
                  <span className="text-[14px] text-red-500">
                    {errors.date.message}
                  </span>
                )}
              </div>
              <div>
                <InputGroup display="flex" alignItems="center" gap="0 20px">
                  <InputLeftAddon w="200px" children="Giới tính" />
                  <RadioGroup>
                    <Stack direction="row">
                      <Radio
                        {...register("gender")}
                        value="Nam"
                        isChecked={true}
                        colorScheme="orange"
                      >
                        Name
                      </Radio>
                      <Radio
                        {...register("gender")}
                        value="Nữ"
                        colorScheme="orange"
                      >
                        Nữ
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </InputGroup>
                {errors.gender && (
                  <span className="text-[14px] text-red-500">
                    {errors.gender.message}
                  </span>
                )}
              </div>
              <div>
                <Menu>
                  <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
                    {subjectValue}
                  </MenuButton>
                  <MenuList>
                    {subjects?.map((item: any, index: number) => (
                      <MenuItem
                        key={item?._id}
                        onClick={() =>
                          handleClick(item?.subjectName, item?._id)
                        }
                      >
                        {item?.subjectName}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                {errors.subject && (
                  <span className="text-[14px] text-red-500">
                    {errors.subject.message}
                  </span>
                )}
              </div>
              <div>
                <InputGroup>
                  <InputLeftAddon w="200px" children="Mô tả" />
                  <Textarea
                    {...register("desc")}
                    placeholder="Mô tả"
                    size="sm"
                    resize={"none"}
                  />
                </InputGroup>
                {errors.desc && (
                  <span className="text-[14px] text-red-500">
                    {errors.desc.message}
                  </span>
                )}
              </div>
              <div className="p-[20px] border-[1px] border-[#E9EAF0] w-fit h-fit">
                <div
                  onClick={handleImageClick}
                  className="w-[280px] h-[280px] relative cursor-pointer"
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="https://images.pexels.com/photos/18125686/pexels-photo-18125686/free-photo-of-dem-d-ng-t-th-ch-p-nh-sang-tr-l-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="flex items-center gap-x-3 absolute bottom-0 left-0 w-full justify-center p-[12px] text-white bg-black opacity-50">
                    <BsUpload className="text-[20px]" />
                    <span className="text-[14px]">Tải ảnh lên</span>
                  </div>
                  <input
                    {...register("avatar")}
                    type="file"
                    ref={input}
                    onChange={handleImageChange}
                    className="hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Đóng
            </Button>
            <Button type="submit" variant="ghost" isLoading={isSubmitting}>
              Tạo
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateTeacher;
