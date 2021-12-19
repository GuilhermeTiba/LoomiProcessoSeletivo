import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteClientRepo = async (id) => {
  const deleteClient = await prisma.client.delete({
    where:{
      id: id,
    },
  });

  return deleteClient;
};
