import { object, string} from 'yup';

export const userSchema = object({
  name: string().required('Name is Required').min(3,"Name should be minimum of 3 characters"),
  email: string().email("Invalid").required("Email is Required"),
  password: string().required("Password is Required").min(8,"Password should be minimum of 8 characters"),
});
  

export const userLogin =object({
  email: string().email("Invalid").required("Email is Required"),
  password: string().required("Password is Required").min(8,"Password should be minimum of 8 characters"),
})