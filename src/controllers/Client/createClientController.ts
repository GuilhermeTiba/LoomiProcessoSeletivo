import { createClientRepo } from "../../repositories/Client/createClientRepo"


export const createClientController = async (req, res) => {
  const { name, email, phone, address} = req.body

  const createClient = await createClientRepo(name, email, phone, address);

  res.status(200).send({
    createClient
  })
}
