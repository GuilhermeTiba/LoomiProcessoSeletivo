import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateOrderRepo = async (id, clientId?, product_list?, status?) => {
  const updateOrder = await prisma.order.update({
    where: {
      id: id,
    },
    data: {
      clientId: clientId,
      product_list: product_list,
      status: status,
    },
  });

  return updateOrder;
};
