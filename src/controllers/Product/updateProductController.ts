import { updateProductRepo } from "../../repositories/Product/updateProductRepo";


export const updateProductController = async (req, res) => {
  const {id} = req.params;
  const {name, price, characteristics, image} = req.body;

  try {
    const updateProduct = await updateProductRepo(id, name, price, characteristics, image);

    res.status(200).send({
      updateProduct,
    });      
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};