import { getAllProductsBetweenAValueRepo, getSameCharacteristicProductsRepo, getSingleProductRepo } from "../../repositories/Product/getProductRepo";


export const getSingleProductController = async (req, res) => {
  const {id} = req.params;

  const getSingleProduct = await getSingleProductRepo(id);

  res.status(200).send({
    getSingleProduct,
  })
}

export const getAllProductsBetweenAValueController = async (req, res) => {
  const {lowValue, highValue} = req.query
  
  const getProductsBetwenValues = await getAllProductsBetweenAValueRepo(Number(lowValue), Number(highValue));

  res.status(200).send({
    getProductsBetwenValues,
  });
};

export const getSameCharacteristicProductsController = async (req, res) => {
  const { characteristic } = req.query;

  const getSameCharacteristicProducts = await getSameCharacteristicProductsRepo(characteristic);

  res.status(200).send({
    getSameCharacteristicProducts,
  });
};
