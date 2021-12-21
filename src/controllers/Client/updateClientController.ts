import { updateClientRepo } from "../../repositories/Client/updateClientRepo";


export const updateClientController = async (req, res) => {
  const {id} = req.params;
  const {name, email, phone, address} = req.body;

  try {
    const updateClient = await updateClientRepo(id, name, email, phone, address);

    res.status(200).send({
      updateClient,
    });    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};