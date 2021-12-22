import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const verifyEmail = async (id, uniqueString) => {
  const findUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if(await compare(uniqueString, findUser.verificationCode)){
    const userUpdateVerify = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        verified: true,
      },
    });
    return true;
  } else {
    return false;
  };
};

