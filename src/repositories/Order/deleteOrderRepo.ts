import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteOrderRepo = async (id) => {
  const deleteOrder = prisma.order.delete({
    where:{
      id: id,
    },
  });

  return deleteOrder;
};
