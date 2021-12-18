import { PrismaClient } from '@prisma/client';
import { compare, genSalt, hash } from 'bcrypt';

const prisma = new PrismaClient();

export const updateUserPasswordRepo = async (id, lastPassword, newPassword) => {
  
  if(await checkUserLastPassword(id, lastPassword)){
  const salt = await genSalt();
  const hashedPassword = await hash(newPassword, salt);

  const updateUserPassword = await prisma.user.update({
    where:{
      id: id,
    },
    data:{
      password: hashedPassword,
    },
  });
  return updateUserPassword;

  } else {
    return null
  }
};

const checkUserLastPassword = async (id, password) => {
  const userLastPassword = await prisma.user.findUnique({
    where:{
      id: id,
    },
  })
  return compare(password, userLastPassword.password)
}