import * as Yup from 'yup';

export const createClientSchema = Yup.object({
  email: Yup.string()
   .required()
   .email(),
  name: Yup.string()
   .required(),
  phone: Yup.string()
   .required(),
  address: Yup.string()
   .required(),
});

export const updateClientSchema = Yup.object({
  email: Yup.string()
  .optional()
  .email(),
 name: Yup.string()
  .optional(),
 phone: Yup.string()
  .optional(),
 address: Yup.string()
  .optional(),
});
