import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  email: yup.string().email('Email không đúng').required('Yêu cầu nhập email'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải hơn 6 ký tự')
    .required('Yêu cầu nhập mật khẩu'),
});
export const loginTeacherSchema = yup.object().shape({
  emailteacher: yup
    .string()
    .email('Email không đúng')
    .required('Yêu cầu nhập email'),
  passwordteacher: yup
    .string()
    .min(6, 'Mật khẩu phải hơn 6 ký tự')
    .required('Yêu cầu nhập mật khẩu'),
});
export const signupSchema = yup.object().shape({
  email: yup.string().email('Email không đúng').required('Yêu cầu nhập email'),
  username: yup.string().required('Yêu cầu nhập username'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải hơn 6 ký tự')
    .required('Yêu cầu nhập mật khẩu'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu chưa chính xác')
    .required('Yêu cầu nhập mật khẩu'),
});
export const otpSignupSchema = yup.object().shape({
  otp: yup.string().required('Yêu cầu nhập mã OTP để đăng ký'),
});
export const emailForgetPasswordScheme = yup.object().shape({
  emailForgetPassword: yup.string().required('Yêu cầu nhập'),
});
export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, 'Mật khẩu phải hơn 6 ký tự')
    .required('Yêu cầu nhập mật khẩu'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Mật khẩu chưa chính xác')
    .required('Yêu cầu nhập mật khẩu'),
  otp: yup.string().required('Yêu cầu nhập mã OTP để đổi mật khẩu'),
});
export const changePassSchema = yup.object().shape({
  current: yup
    .string()
    .min(6, 'Mật khẩu phải hơn 6 ký tự')
    .required('Yêu cầu nhập mật khẩu hiện tại'),
  new: yup
    .string()
    .min(6, 'Mật khẩu phải hơn 6 ký tự')
    .required('Yêu cầu nhập mật khẩu mới'),
  newConfirm: yup
    .string()
    .oneOf([yup.ref('new')], 'Mật khẩu chưa chính xác')
    .required('Yêu cầu nhập mật khẩu mới'),
});
export const createTeacher = yup.object().shape({
  fullname: yup.string().required('Yêu cầu nhập họ và tên'),
  username: yup.string().required('Yêu cầu nhập username'),
  email: yup.string().email('Email không đúng').required('Yêu cầu nhập email'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải hơn 6 ký tự')
    .required('Yêu cầu nhập mật khẩu mới'),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu chưa chính xác')
    .required('Yêu cầu nhập mật khẩu mới'),
  date: yup.date().required('Phải nhập ngày sinh'),
  gender: yup.string().required('Phải check giới tính'),
  subject: yup
    .array()
    .required('akjsnkjansda')
    .test('is-not-empty', 'Chọn môn học', (value) => value.length > 0),
  desc: yup.string().required('Yêu cầu nhập mô tả thông tin'),
  avatar: yup.string().required('Yêu cầu nhập'),
});
export const inputChatMess = yup.object().shape({
  inputChat:yup.string().required()
});