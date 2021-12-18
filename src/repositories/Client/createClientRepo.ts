import { PrismaClient } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

const prisma = new PrismaClient();

export const createClientRepo = async (name, email, phone, address) => {
  const uuid = uuidV4();

  const createClient = await prisma.client.create({
    data:{
      id: uuid,
      name,
      email,
      phone,
      address,
    },
  });

  return createClient;
};
