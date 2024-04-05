// src/services/authService.ts
// Service for handling authentication-related logic

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

// Function to validate user credentials
async function validateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return null
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return null
  }
  return user
}

// Function to generate JWT token
function generateToken(userId: number) {
  return jwt.sign({ userId }, process.env.JWT_SECRET ?? '', { expiresIn: '1d' })
}

export { validateUser, generateToken }
