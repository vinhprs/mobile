import React, { FormEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import {
  Flex,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/appHooks';
import {
  getCategory,
  getProvince,
  getSubjects,
  getSubjetsGroup,
  userSetting,
} from '../../store/actions/user.action';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

interface UserProps {
  name: string;
  phone: string;
  dateofbirth: Date;
  gender: string;
  province: string;
  district: string;
  address: string;
  grade: number;
  subjects: Array<string>;
  interestSubject: string;
}

const FormInformation = () => {
  const dispatch = useAppDispatch();
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [subjectGroup, setSubjectGroup] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = React.useState('Nam');
  const [grade, setGrade] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserProps>({
    defaultValues: {
      name: '',
      phone: '',
      dateofbirth: startDate,
      gender: '',
      province: '',
      district: '',
      address: '',
      grade: 0,
      subjects: [],
      interestSubject: '',
    },
  });
  const getProvinces = async () => {
    const response: any = await dispatch(getProvince({}));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      console.log(response);
      setProvince(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  const getDistricts = async () => {
    const response: any = await dispatch(getProvince(watch('province')));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      console.log(response);
      setDistrict(response.payload?.data?.districts);
    } else {
      console.log(response.payload);
    }
  };
  const getAllSubject = async () => {
    const response: any = await dispatch(getSubjects({}));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      console.log(response);
      setSubjects(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  const getAllSubjectGroup = async () => {
    const response: any = await dispatch(getSubjetsGroup({}));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      console.log(response);
      setSubjectGroup(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  const getCategories = async () => {
    const response: any = await dispatch(getCategory({}));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      console.log(response);
      setGrade(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  useEffect(() => {
    getProvinces();
    getAllSubject();
    getAllSubjectGroup();
    getCategories();
  }, []);
  useEffect(() => {
    getDistricts();
  }, [watch('province')]);
  const onSubmit = async (data: UserProps) => {
    // const converSunb = data.subjects.map((item, index) => +item);
    const payload = {
      fullname: data.name,
      phone: data.phone,
      gender: data.gender === 'Nam' ? true : false,
      birthDate: moment(data.dateofbirth).format('YYYY-MM-DD'),
      address: {
        province: +data.province,
        district: +data.district,
        detail: data.address,
      },
      subjectNames: data.subjects,
      grade: +data.grade,
      subjectGroup: +data.interestSubject,
    };
    const res = await dispatch(userSetting(payload));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      console.log(res);
      navigate('/');
    } else {
      console.log('err');
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3 mb-3">
          <input
            {...register('name')}
            type="text"
            placeholder="Tên"
            className="focus:outline-none w-full px-3 py-3 outline-none border-[1px] border-[#E9EAF0] placeholder:text-[#8C94A3] placeholder:font-normal placeholder:text-[14px] "
          />
          <input
            {...register('phone')}
            type="text"
            placeholder="Số điện thoại"
            className="focus:outline-none w-full px-3 py-3 outline-none border-[1px] border-[#E9EAF0] placeholder:text-[#8C94A3] placeholder:font-normal placeholder:text-[14px] "
          />
          <DatePicker
            {...register('dateofbirth')}
            onChange={(date: any) => setStartDate(date)}
            selected={startDate}
            className="w-full px-3 py-3 outline-none border-[1px] border-[#E9EAF0] placeholder:text-[#8C94A3] placeholder:font-normal placeholder:text-[14px]"
            placeholderText="Ngày sinh"
          />
          <RadioGroup onChange={setValue} value={value}>
            <Flex direction="row" gap="3">
              <Radio
                {...register('gender')}
                value="Nam"
                colorScheme="orange"
                borderColor="#E9EAF0"
              >
                Nam
              </Radio>
              <Radio {...register('gender')} value="Nữ" colorScheme="orange">
                Nữ
              </Radio>
            </Flex>
          </RadioGroup>
          <Select
            _focus={{ borderColor: '#FF6636', outline: 'none' }}
            borderRadius="none"
            height="45px"
            placeholder="Tỉnh"
            outline="none"
            bg="white"
            {...register('province')}
            // onChange={handleChangeProvince}
          >
            {province.map((item: any, index: any) => (
              <option value={item.code} key={item.code}>
                {item.name}
              </option>
            ))}
          </Select>
          <Select
            _focus={{ borderColor: '#FF6636', outline: 'none' }}
            borderRadius="none"
            height="45px"
            placeholder="Quận"
            outline="none"
            bg="white"
            {...register('district')}
          >
            {district?.map((item: any, index: any) => (
              <option value={item.code} key={item.code}>
                {item.name}
              </option>
            ))}
          </Select>
          <input
            {...register('address')}
            type="text"
            placeholder="Địa chỉ"
            className="focus:outline-none w-full px-3 py-3 outline-none border-[1px] border-[#E9EAF0] placeholder:text-[#8C94A3] placeholder:font-normal placeholder:text-[14px] "
          />
          <Select
            _focus={{ borderColor: '#FF6636', outline: 'none' }}
            borderRadius="none"
            height="45px"
            placeholder="Lớp"
            outline="none"
            bg="white"
            {...register('grade')}
          >
            {grade.map((item: any, index: any) => (
              <option value={item._id} key={item._id}>
                {item.categoryName}
              </option>
            ))}
          </Select>
          <div>
            <h1 className="font-normal placeholder:text-[14px] text-[#FF6636]  mb-2">
              Môn học mà bạn quan tâm
            </h1>
            <div className="grid grid-cols-3 gap-3">
              {subjects.map((item: any, index: any) => (
                <Checkbox
                  key={item._id}
                  value={item.subjectName}
                  colorScheme="orange"
                  borderColor="#8C94A3"
                  {...register('subjects')}
                  fontSize="14px"
                >
                  {item.subjectName}
                </Checkbox>
              ))}
            </div>
          </div>

          <Select
            _focus={{ borderColor: '#FF6636', outline: 'none' }}
            borderRadius="none"
            height="45px"
            placeholder="Khối thi"
            outline="none"
            bg="white"
            {...register('interestSubject')}
          >
            {subjectGroup.map((item: any, index: any) => (
              <option value={item._id} key={item._id}>
                {item.subjectGroupName}
              </option>
            ))}
          </Select>
        </div>
        <Button
          _hover={{ bg: '#fa5928' }}
          w="100%"
          bg="#FF6636"
          color="white"
          borderRadius="none"
          type="submit"
          isLoading={isSubmitting}
        >
          Xác nhận
        </Button>
      </form>
    </div>
  );
};

export default FormInformation;
