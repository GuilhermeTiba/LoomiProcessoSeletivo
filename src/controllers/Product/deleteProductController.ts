import { deleteProductRepo } from "../../repositories/Product/deleteProductRepo";


export const deleteProductController = async (req, res) => {
  const {id} = req.params;

  try {
    const deleteProduct = await deleteProductRepo(id);

    res.status(200).send({
      deleteProduct,
    });      
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};
