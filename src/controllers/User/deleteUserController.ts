import { deleteUserRepo } from "../../repositories/User/deleteUserRepo";


export const deleteUserController = async (req, res) => {
  const { id } = req.params;

  const deleteUser = await deleteUserRepo(id);

  res.status(200).send({
    deleteUser
  })
}