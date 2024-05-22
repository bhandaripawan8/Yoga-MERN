import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

// Generate JWT
 const generateToken = (id) => {
    return jwt.sign(id),process.env.JWTSECRETKEY,{expire: '30d'}
  };

export default generateToken;

  console.log(generateToken);
  