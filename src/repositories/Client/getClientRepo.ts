import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getClientRepo = async (id) => {
  const getClient = await prisma.client.findUnique({
    where:{
      id: id,
    },
  });

  return getClient;
};