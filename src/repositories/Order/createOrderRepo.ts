import { PrismaClient } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

const prisma = new PrismaClient();

export const createOrderRepo = async (clientId, product_list) => {
  const uuid = uuidV4();

  const createOrder = await prisma.order.create({
    data: {
      id: uuid,
      clientId: clientId,
      product_list: product_list,
    },
  });

  return createOrder;
};