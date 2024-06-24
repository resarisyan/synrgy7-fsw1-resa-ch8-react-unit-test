import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  name: Yup.string().required('Name is required'),
});
