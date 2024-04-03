import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const EnquirySchema=yup.object({
    name:yup.string().min(2).required("Please enter your name"),
    email:yup.string().email().required('Please enter your email'),
    // phone:yup.(phoneRegExp, 'Phone number is not valid').required('Please enter phone number'),
    address:yup.string().required('Please enter your address')
})

export const ContactSchema=yup.object({
    name:yup.string().min(2).required('Please enter your name'),
    email:yup.string().email().required('Please enter your email')
})