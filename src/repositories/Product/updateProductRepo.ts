import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateProductRepo = async (id, name?, price?, characteristics?, image?) => {
  const updateProduct = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      price: price,
      characteristics: characteristics,
      image: image,
    },
  });

  return updateProduct
};
