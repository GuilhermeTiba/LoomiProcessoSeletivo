import { createUserFunc } from "../../repositories/User/createUserRepo"

export const createUserController = async (req, res) => {
  const { email, password} = req.body;
  const createUser = await createUserFunc(email, password);

  res.status(200).send({
    createUser
  })
}
