import { checkIfClientIdNotExists } from "../../errors/orderErrorHandler";
import { getAllOrdersFromAClientRepo, getAllOrdersFromACustomTimestampRepo, getSingleOrderRepo } from "../../repositories/Order/getOrderRepo"

export const getSingleOrderController = async (req, res) => {
  const {id} = req.params;

  try {
    const getSingleOrder = await getSingleOrderRepo(id);

    res.status(200).send({
      getSingleOrder,
    });      
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};

export const getAllOrdersFromAClientController = async (req, res) => {
  const {clientId} = req.query;

  if(checkIfClientIdNotExists){
    return res.status(404).send({
      error : 'ClientId does not exist'
    })
  }

  try {
    const getAllOrdersFromAClient = await getAllOrdersFromAClientRepo(clientId);
  
    res.status(200).send({
      getAllOrdersFromAClient,
    });
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};

export const getAllOrdersFromACustomTimestampController = async (req, res) => {
  const {initialTime, finalTime} = req.query;

  try {
    const getAllOrdersFromACustomTimestamp = await getAllOrdersFromACustomTimestampRepo(initialTime, finalTime);

    res.status(200).send({
      getAllOrdersFromACustomTimestamp,
    });    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};