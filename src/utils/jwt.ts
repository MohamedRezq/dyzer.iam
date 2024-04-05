// src/utils/jwt.ts
import jwt from 'jsonwebtoken'

// Generates a JWT token
function generateToken(payload: object, expiresIn: string = '1d'): string {
  return jwt.sign(payload, process.env.JWT_SECRET ?? '', { expiresIn })
}

// Verifies a JWT token
function verifyToken(token: string): string | object {
  return jwt.verify(token, process.env.JWT_SECRET ?? '')
}

export { generateToken, verifyToken }
