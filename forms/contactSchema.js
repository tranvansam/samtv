import * as yup from 'yup'

export const contactSchema = yup.object({
  name: yup
    .string()
    .required('Họ và tên là bắt buộc')
    .min(2, 'Họ và tên phải có ít nhất 2 ký tự')
    .max(50, 'Họ và tên không được vượt quá 50 ký tự'),
  
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Vui lòng nhập địa chỉ email hợp lệ')
    .max(100, 'Email không được vượt quá 100 ký tự'),
  
  service: yup
    .string()
    .required('Vui lòng chọn loại dịch vụ'),
  
  phone: yup
    .string()
    .required('Số điện thoại là bắt buộc')
    .matches(/^[\+]?[0-9\s\-\(\)]{10,15}$/, 'Vui lòng nhập số điện thoại hợp lệ')
    .min(10, 'Số điện thoại phải có ít nhất 10 chữ số')
    .max(15, 'Số điện thoại không được vượt quá 15 chữ số'),
  
  message: yup
    .string()
    .max(500, 'Tin nhắn không được vượt quá 500 ký tự')
})

export const contactInitialValues = {
  name: '',
  email: '',
  service: '',
  phone: '',
  message: ''
} 