import * as Yup from 'yup';

export const createUserSchema = Yup.object({
  email: Yup.string()
   .required()
   .email(),
  password: Yup.string()
   .required()
   .min(8, 'Password is too short, must be larger than 8 digits'),
});

export const updateUserSchema = Yup.object({
  password: Yup.string()
   .required()
   .min(8, 'Password is too short, must be larger than 8 digits')
})