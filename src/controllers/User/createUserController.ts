import { createUserRepo } from "../../repositories/User/createUserRepo"

export const createUserController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const createUser = await createUserRepo(email, password);

    res.status(200).send({
      createUser,
    });
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};
