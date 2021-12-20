import { checkIfNotAllProductsOnListExists } from "../../errors/productErrorHandler";
import { updateOrderRepo } from "../../repositories/Order/updateOrderRepo";

export const updateOrderController = async (req, res) => {
  const {id} = req.params;
  const {clientId, product_list, status} = req.body;
  const checkProducts = await checkIfNotAllProductsOnListExists(product_list);

  if(checkProducts != null){
    return res.status(400).send({
      error: `Unvalid product Id's: ${checkProducts}`
    });
  };

  try {
  const updateOrder = await updateOrderRepo(id, clientId, product_list, status);

  res.status(200).send({
    updateOrder,
  });
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};
