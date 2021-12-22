import { PrismaClient } from '@prisma/client';
import { genSalt, hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';
import { sendVerificationEmail } from '../../configs/email/sendVerificationEmail';

const prisma = new PrismaClient();

export const createUserRepo = async (email: string, password: string) => {
  const uuid = uuidV4();
  const uniqueString = uuidV4();

  const salt = await genSalt();
  const hashedVerificationCode = await hash(uniqueString, salt);
  const hashedPassword = await hash(password, salt);

  const createUser = await prisma.user.create({
    data:{
      id: uuid,
      email: email,
      password: hashedPassword,
      verified: false,
      verificationCode: hashedVerificationCode,
    },
  });

  sendVerificationEmail(uuid, email, uniqueString);

  return createUser;
};