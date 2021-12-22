import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { generateAccessToken } from "../../configs/token/generateAccessToken";

const prisma = new PrismaClient();

export const authPasswordController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUserPassword = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
  
    if(await compare(password, findUserPassword.password)){
      const accessToken = generateAccessToken({ email });
  
      res.status(200).send({
        accessToken,
      })
    } else {
      res.status(405).send({
        error : 'Not Allowed',
      });
    };
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};
