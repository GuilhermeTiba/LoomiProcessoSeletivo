import { deleteOrderRepo } from "../../repositories/Order/deleteOrderRepo";

export const deleteOrderController = async (req, res) => {
  const {id} = req.params;

  try {
    const deleteOrder = await deleteOrderRepo(id);
  
    res.status(200).send({
      deleteOrder,
    });
    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};