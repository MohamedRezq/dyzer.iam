// src/utils/middleware.ts
import { Request, Response, NextFunction } from 'express'
import { verifyToken } from './jwt'

// Middleware to authenticate and set user in request
function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).send('Access denied. No token provided.')
    }
    const decoded = verifyToken(token)
    req.user = decoded // Assuming 'user' is a property in the JWT payload
    next()
  } catch (error) {
    res.status(400).send('Invalid token.')
  }
}

export { authenticate }
