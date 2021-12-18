import { PrismaClient } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

const prisma = new PrismaClient();

export const createUserFunc = async (email: string, password: string) => {
  const uuid = uuidV4()

  const salt = await genSalt();
  const hashedPassword = await hash(password, salt)

  const createUser = await prisma.user.create({
    data:{
      id: uuid,
      email: email,
      password: hashedPassword,
    },
  });

  return createUser
};