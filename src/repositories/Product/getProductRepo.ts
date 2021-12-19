import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSingleProductRepo = async (id) => {
  const getSingleProduct = await prisma.product.findUnique({
    where:{
      id: id,
    },
  });
  return getSingleProduct
};

export const getAllProductsBetweenAValueRepo = async (lowValue, highValue) => {
  const getProductsBetwenValues = await prisma.product.findMany({
    where:{
      price: {
        gte: lowValue,
        lte: highValue,
      },
    },
  });
  return getProductsBetwenValues;
};

export const getSameCharacteristicProductsRepo = async (characteristic) => {
  const getSameCharacteristicProducts = await prisma.product.findMany({
    where:{
      characteristics: characteristic,
    },
  });
  return getSameCharacteristicProducts;
}