import { deleteUserRepo } from "../../repositories/User/deleteUserRepo";


export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  
  try {
    const deleteUser = await deleteUserRepo(id);

    res.status(200).send({
      deleteUser,
    });    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};