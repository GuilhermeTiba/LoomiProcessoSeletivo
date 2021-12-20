import * as Yup from 'yup';

export const createProductSchema = Yup.object({
  name: Yup.string()
   .required(),
  price: Yup.number()
   .required(),
  characteristics: Yup.string()
   .required(),
  image: Yup.mixed()
   .optional(),
});

export const updateProductSchema = Yup.object({
  name: Yup.string()
  .optional(),
 price: Yup.number()
  .optional(),
 characteristics: Yup.string()
  .optional(),
 image: Yup.mixed()
  .optional(),
});
