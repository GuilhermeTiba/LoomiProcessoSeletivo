import { checkIfNotAllProductsOnListExists } from "../../errors/productErrorHandler";
import { createOrderRepo } from "../../repositories/Order/createOrderRepo"

export const createOrderController = async (req, res) => {
  const {clientId, product_list} = req.body;
  const checkProducts = await checkIfNotAllProductsOnListExists(product_list);

  if(checkProducts != null){
    return res.status(400).send({
      error: `Unvalid product Id's: ${checkProducts}`
    });
  };

  try {
    const createOrder = await createOrderRepo(clientId, product_list);
  
    res.status(200).send({
      createOrder,
    });
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};
