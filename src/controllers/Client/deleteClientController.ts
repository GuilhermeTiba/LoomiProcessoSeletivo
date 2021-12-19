import { deleteClientRepo } from "../../repositories/Client/deleteClientRepo";


export const deleteClientController = async (req, res) => {
  const {id} = req.params;

  const deleteClient = await deleteClientRepo(id);

  res.status(200).send({
    deleteClient,
  });
};