import { updateUserPasswordRepo } from "../../repositories/User/updateUserRepo";


export const updateUserPasswordController = async (req, res) => {
  const { id } = req.params;
  const { lastPassword, newPassword } = req.body;

  const updateUserPassword = await updateUserPasswordRepo(id, lastPassword, newPassword);

  if(updateUserPassword === null){
    res.status(403).send({
      Error: 'Last password is incorrect'
    })
    return
  }

  res.status(200).send({
    updateUserPassword
  })
}
