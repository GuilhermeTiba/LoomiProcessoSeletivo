import { PrismaClient } from "@prisma/client"
import { date } from "yup/lib/locale";

const prisma = new PrismaClient();

export const checkIfClientIdNotExists = async (clientId) => {
  const checkIfClientIdExists = await prisma.client.findUnique({
    where: {
      id: clientId,
    },
  });

  if(checkIfClientIdExists){
    return false;
  } else {
    return true;
  };
};
