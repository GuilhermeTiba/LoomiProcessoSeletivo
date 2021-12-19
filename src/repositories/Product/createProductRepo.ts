import { PrismaClient } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

const prisma = new PrismaClient();

export const createProductRepo = async (name, price, characteristics, image?) => {
  const uuid = uuidV4()

  const createProduct = await prisma.product.create({
    data: {
      id: uuid,
      name: name,
      price: price,
      characteristics: characteristics,
      image : image,
    },
  });
  return createProduct
};