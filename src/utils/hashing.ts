// src/utils/hashing.ts
import bcrypt from 'bcryptjs'

// Hashes a password
async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

// Compares a plain text password against a hashed password
async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export { hashPassword, comparePassword }
