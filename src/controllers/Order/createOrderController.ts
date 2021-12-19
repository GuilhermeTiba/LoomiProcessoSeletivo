import { createOrderRepo } from "../../repositories/Order/createOrderRepo"

export const createOrderController = async (req, res) => {
  const {clientId, product_list} = req.body;

  const createOrder = await createOrderRepo(clientId, product_list);

  res.status(200).send({
    createOrder,
  });
};
