import { deleteOrderRepo } from "../../repositories/Order/deleteOrderRepo";

export const deleteOrderController = async (req, res) => {
  const {id} = req.params;

  const deleteOrder = await deleteOrderRepo(id);

  res.status(200).send({
    deleteOrder
  })
}