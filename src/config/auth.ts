// src/config/auth.ts
const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1d'
  }
}

export default authConfig
