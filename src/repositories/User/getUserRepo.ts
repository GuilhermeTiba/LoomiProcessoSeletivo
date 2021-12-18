import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSingleUserRepo = async ( IdOrEmail ) => {
  const getSingleUserById = await prisma.user.findUnique({
    where: {
      id: IdOrEmail,
    },
  });
  if(getSingleUserById){
    return getSingleUserById;
  };

  const getSingleUserByEmail = await prisma.user.findUnique({
    where: {
      email: IdOrEmail,
    },
  });
  if(getSingleUserByEmail){
    return getSingleUserByEmail;
  } else {
    return null;
  };
};

export const getUsersWithSameEmailProviderRepo = async (emailProvider) => {
  const dotComEmailProvider = `${emailProvider}.com`;

  const usersWithSameEmailProvider = await prisma.user.findMany({
    where:{
      email: {
        endsWith: dotComEmailProvider,
      },
    },
  });

  if(usersWithSameEmailProvider.length > 0){
    return usersWithSameEmailProvider;
  } else {
    return null;
  }
}
