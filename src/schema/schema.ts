import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup.string().email("Email không đúng").required("Yêu cầu nhập email"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải hơn 6 ký tự")
    .required("Yêu cầu nhập mật khẩu"),
});

export const signupSchema = yup.object().shape({
  email: yup.string().email("Email không đúng").required("Yêu cầu nhập email"),
  username: yup.string().required("Yêu cầu nhập username"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải hơn 6 ký tự")
    .required("Yêu cầu nhập mật khẩu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu chưa chính xác")
    .required("Yêu cầu nhập mật khẩu"),
});
export const otpSignupSchema = yup.object().shape({
  otp: yup.string().required("Yêu cầu nhập mã OTP để đăng ký"),
});
export const emailForgetPasswordScheme = yup.object().shape({
  emailForgetPassword: yup.string().required("Yêu cầu nhập"),
});
export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, "Mật khẩu phải hơn 6 ký tự")
    .required("Yêu cầu nhập mật khẩu"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Mật khẩu chưa chính xác")
    .required("Yêu cầu nhập mật khẩu"),
  otp: yup.string().required("Yêu cầu nhập mã OTP để đổi mật khẩu"),
});
