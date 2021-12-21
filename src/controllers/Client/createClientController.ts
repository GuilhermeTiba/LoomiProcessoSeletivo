import { createClientRepo } from "../../repositories/Client/createClientRepo"


export const createClientController = async (req, res) => {
  const { name, email, phone, address} = req.body

  try {
    const createClient = await createClientRepo(name, email, phone, address);
    
    res.status(200).send({
      createClient,
    });
    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};

