import { updateOrderRepo } from "../../repositories/Order/updateOrderRepo";

export const updateOrderController = async (req, res) => {
  const {id} = req.params;
  const {clientId, product_list, status} = req.body;

  const updateOrder = await updateOrderRepo(id, clientId, product_list, status);

  res.status(200).send({
    updateOrder,
  });
};
