import { deleteProductRepo } from "../../repositories/Product/deleteProductRepo";


export const deleteProductController = async (req, res) => {
  const {id} = req.params;

  const deleteProduct = await deleteProductRepo(id);

  res.status(200).send({
    deleteProduct,
  });
};
