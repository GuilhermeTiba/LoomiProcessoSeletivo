import { getClientRepo } from "../../repositories/Client/getClientRepo";


export const getClientController = async (req, res) => {
  const {id} = req.params;

  try {
    const getClient = await getClientRepo(id);

    res.status(200).send({
      getClient,
    });
      
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};