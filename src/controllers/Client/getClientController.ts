import { getClientRepo } from "../../repositories/Client/getClientRepo";


export const getClientController = async (req, res) => {
  const {id} = req.params;

  const getClient = await getClientRepo(id);

  res.status(200).send({
    getClient,
  })
}