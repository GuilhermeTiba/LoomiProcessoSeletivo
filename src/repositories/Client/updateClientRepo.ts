import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const updateClientRepo = async (id, name?, email?, phone?, address?) => {
  const updateClient = await prisma.client.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      phone: phone,
      address: address,
    },
  });

  return updateClient
};
