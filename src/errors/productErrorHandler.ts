import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const checkIfQueryParamsAreNumbers = (lowValue, highValue) => {
  if(!isNaN(lowValue) && !isNaN(highValue)){
    return false
  } else {
    return true
  }
}

export const checkIfNotAllProductsOnListExists = async (product_list: Array<string>) => {
  const uncheckedProducts = [];
  for (let index = 0; index < product_list.length; index += 1) {
    const productId = product_list[index];

    const checkIfSingleProductExist = await checkIfSingleProductExistFunc(productId);
    
    if(checkIfSingleProductExist == null){
      uncheckedProducts.push(productId);
    };
  };

  console.log(uncheckedProducts);

  if(uncheckedProducts.length == 0){
    return null
  } else {
    return uncheckedProducts
  };
};

const checkIfSingleProductExistFunc = async ( productId) => {
  const checkIfProductExist = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  return checkIfProductExist
}