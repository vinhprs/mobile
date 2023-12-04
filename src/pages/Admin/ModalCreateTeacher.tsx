import React, { useEffect, useState } from "react";
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
}
const ModalCreateTeacher = ({
  isOpen,
  onClose,
  getAccountStudentList,
}: any) => {
  const dispatch = useAppDispatch();
  const [subjects, setSubjects] = useState<any>([]);
  const [subjectValue, setSubjectValue] = useState("Môn học");
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
    },
  });
  const getAllSubject = async () => {
    const res: any = await dispatch(getSubjects({}));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      setSubjects(res?.payload?.data);
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
            <div>
              <InputGroup>
                <InputLeftAddon children="Họ và tên" />
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
              <InputGroup>
                <InputLeftAddon children="Username" />
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
              <InputGroup>
                <InputLeftAddon children="Email" />
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
              <InputGroup>
                <InputLeftAddon children="Mật khẩu" />
                <Input
                  {...register("password")}
                  type="password"
                  placeholder="kieg@gmail.com"
                  outline="none"
                  _focusVisible={{
                    borderColor: "#FF6636",
                  }}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="Xác nhận mật khẩu" />
                <Input
                  {...register("confirmPass")}
                  type="password"
                  placeholder="kieg@gmail.com"
                  outline="none"
                  _focusVisible={{
                    borderColor: "#FF6636",
                  }}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="Ngày sinh" />
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
              <InputGroup display="flex" alignItems="center" gap="0 20px">
                <InputLeftAddon children="Giới tính" />
                <RadioGroup>
                  <Stack direction="row">
                    <Radio
                      {...register("gender")}
                      value="Nam"
                      defaultChecked
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
              <Menu>
                <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
                  {subjectValue}
                </MenuButton>
                <MenuList>
                  {subjects?.map((item: any, index: number) => (
                    <MenuItem
                      key={item?._id}
                      onClick={() => handleClick(item?.subjectName, item?._id)}
                    >
                      {item?.subjectName}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <InputGroup>
                <InputLeftAddon children="Mô tả" />
                <Textarea
                  {...register("desc")}
                  placeholder="Mô tả"
                  size="sm"
                  resize={"none"}
                />
              </InputGroup>
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
