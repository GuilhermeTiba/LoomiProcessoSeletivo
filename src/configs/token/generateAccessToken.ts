import { sign } from 'jsonwebtoken';

export const generateAccessToken = (email : any) => {
  return sign(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
};
