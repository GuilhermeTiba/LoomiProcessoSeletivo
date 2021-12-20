import * as Yup from 'yup';

export const createOrderSchema = Yup.object({
  clientId: Yup.string()
   .required(),
  product_list: Yup.array()
   .required(),
});

export const updateOrderSchema = Yup.object({
  clientId: Yup.string()
   .optional(),
 status: Yup.string()
   .optional(),
  product_list: Yup.array()
   .optional(),
});
