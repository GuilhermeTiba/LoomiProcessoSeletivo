import { verifyEmail } from "../../configs/email/verifyEmail";

export const verifyEmailController = (req, res) => {
  const {id, uniqueString} = req.params;

  try {
    if(verifyEmail(id, uniqueString)){
      res.send({
        message: 'User verified, you can use now the application',
      });
    } else {
      res.send({
        error: 'Something went wrong on verifying your user',
      });
    };    
  } catch (error) {
    res.status(error.statusCode || 500).send({
      error: error,
    });
  };
};