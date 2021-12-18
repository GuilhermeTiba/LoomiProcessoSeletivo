import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteUserRepo = async (id) => {
  const deleteUser = prisma.user.delete({
    where:{
      id: id
    }
  })
  return deleteUser
}
