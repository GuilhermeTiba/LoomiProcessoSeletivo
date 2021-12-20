import { deleteClientRepo } from "../../repositories/Client/deleteClientRepo";


export const deleteClientController = async (req, res) => {
  const {id} = req.params;

  try {
    const deleteClient = await deleteClientRepo(id);

    res.status(200).send({
      deleteClient,
    });
    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};