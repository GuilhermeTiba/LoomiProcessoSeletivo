import { getAllOrdersFromAClientRepo, getAllOrdersFromACustomTimestampRepo, getSingleOrderRepo } from "../../repositories/Order/getOrderRepo"

export const getSingleOrderController = async (req, res) => {
  const {id} = req.params;
  
  const getSingleOrder = await getSingleOrderRepo(id);

  res.status(200).send({
    getSingleOrder,
  });
};

export const getAllOrdersFromAClientController = async (req, res) => {
  const {clientId} = req.query;

  const getAllOrdersFromAClient = await getAllOrdersFromAClientRepo(clientId);

  res.status(200).send({
    getAllOrdersFromAClient,
  });
};

export const getAllOrdersFromACustomTimestampController = async (req, res) => {
  const {initialTime, finalTime} = req.query;

  const getAllOrdersFromACustomTimestamp = await getAllOrdersFromACustomTimestampRepo(initialTime, finalTime);

  res.status(200).send({
    getAllOrdersFromACustomTimestamp,
  });
};