import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSingleOrderRepo = async (id) => {
  const getSingleOrder = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });

  return getSingleOrder
}

export const getAllOrdersFromAClientRepo = async (clientId) => {
  const getAllOrdersFromAClient = await prisma.order.findMany({
    where:{
      clientId: clientId,
    },
  });

  return getAllOrdersFromAClient;
};

export const getAllOrdersFromACustomTimestampRepo = async (initialTime?, finalTime?) => {
  const getAllOrdersFromACustomTimestamp = await prisma.order.findMany({
    where:{
      created_at:{
        gte: initialTime,
        lte: finalTime,
      },
    },
  });

  return getAllOrdersFromACustomTimestamp
};
