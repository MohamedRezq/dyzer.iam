// src/services/userService.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createUser(email: string, password: string, name?: string) {
  const hashedPassword = await bcrypt.hash(password, 10)
  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    }
  })
}

async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email
    }
  })
}

async function validateUser(email: string, password: string) {
  const user = await findUserByEmail(email)
  if (!user) {
    return false
  }
  const isMatch = await bcrypt.compare(password, user.password)
  return isMatch ? user : false
}

// Export the functions to be used in other parts of the application
export { createUser, findUserByEmail, validateUser }
