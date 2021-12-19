import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteProductRepo = async (id) => {
  const deleteProduct = await prisma.product.delete({
    where: {
      id:  id,
    },
  });
  
  return deleteProduct;
};
