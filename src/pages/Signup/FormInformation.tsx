import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";
import { Flex, Radio, RadioGroup } from '@chakra-ui/react'
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
const FormInformation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = React.useState('Nam')
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
            defaultValues:{
                name:"",
                phone:"",
                dateofbirth:startDate,
                gender:"Nam",
                address:"",
                interestSubject:"",
            }
        })
  return (
    <div>
        <form action="">
          <div className='flex flex-col gap-y-3 mb-3'>
              <input {...register("name")} type="text" placeholder='Tên' className='focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold '/>
              <input {...register("phone")} type="text" placeholder='Usename' className='focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold '/>
              <DatePicker {...register("dateofbirth")} onChange={(date:any) => setStartDate(date)} selected={startDate} className="w-full px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold"  placeholderText="Ngày sinh"/>
              <RadioGroup onChange={setValue} value={value}>
                <Flex direction='row' gap="3">
                  <Radio {...register("gender")} value='Nam' colorScheme='purple'>Nam</Radio>
                  <Radio {...register("gender")}value='Nữ' colorScheme='purple'>Nữ</Radio>
                </Flex>
              </RadioGroup>
              <input {...register("address")} type="text" placeholder='Địa chỉ' className='focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold '/>
              <Select _focus={{borderColor:"#8614BC"}} borderColor="#272829" borderRadius="none" height="45px" placeholder='Select option' {...register("interestSubject")}>
                <option value='A00'>A00</option>
                <option value='A01'>A01</option>
                <option value='B00'>B00</option>
              </Select>
          </div>
          <Button _hover={{bg:"#5B0E7F"}} w="300px" bg="#8614BC" color="white" borderRadius="none">Xác nhận</Button>
        </form>
    </div>
  )
}

export default FormInformation