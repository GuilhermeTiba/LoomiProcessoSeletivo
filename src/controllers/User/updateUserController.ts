import { updateUserPasswordRepo } from "../../repositories/User/updateUserRepo";


export const updateUserPasswordController = async (req, res) => {
  const { id } = req.params;
  const { lastPassword, newPassword } = req.body;

  try {
    const updateUserPassword = await updateUserPasswordRepo(id, lastPassword, newPassword);

    if(updateUserPassword === null){
      return res.status(403).send({
        Error: 'Last password is incorrect',
      });
    };
    res.status(200).send({
      updateUserPassword,
    });
      
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};
