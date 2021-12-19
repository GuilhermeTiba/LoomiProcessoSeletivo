import { createProductRepo } from "../../repositories/Product/createProductRepo";


export const createProductController = async (req, res) => {
  const {name, price, characteristics, image} = req.body;

  const createProduct = await createProductRepo(name, price, characteristics, image)

  res.status(200).send({
    createProduct
  })
}