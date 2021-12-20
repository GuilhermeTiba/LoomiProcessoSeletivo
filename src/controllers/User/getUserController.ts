import { getSingleUserRepo, getUsersWithSameEmailProviderRepo } from "../../repositories/User/getUserRepo";

export const getSingleUserController = async (req, res) => {
  const { idOrEmail } = req.params;

  try {
    const getSingleUser = await getSingleUserRepo(idOrEmail);

    if(getSingleUser === null){
      res.status(404).send('No User found with this email or id');
      return;
    };
  
    res.status(200).send({
      getSingleUser,
    });    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    })
  };
};

export const getUsersWithSameEmailProviderController = async (req, res) => {
  const { emailProvider } = req.params;

  const getUsersWithSameEmailProvider = await getUsersWithSameEmailProviderRepo(emailProvider);
  if(getUsersWithSameEmailProvider === null){
    res.status(404).send({
      error : `No user found with this "${emailProvider}.com" email provider`
    });
    return;
  };

  res.status(200).send({
    getUsersWithSameEmailProvider,
  });
};