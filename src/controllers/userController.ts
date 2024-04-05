// src/controllers/userController.ts
// Controller for handling user-related operations

import { Request, Response } from 'express'
import * as userService from '../services/userService'
import * as authService from '../services/authService' // Assumes authService is implemented

// Create a new user
export async function createUser(req: Request, res: Response) {
  try {
    const user = await userService.createUser(req.body.email, req.body.password, req.body.name)
    const token = authService.generateToken(user.id) // Generate a token for the new user
    res.status(201).json({ user, token })
  } catch (error) {
    res.status(400).json({ message: 'Could not create user', error })
  }
}

// Function to login user
export async function loginUser(req: Request, res: Response) {
  try {
    const user = await authService.validateUser(req.body.email, req.body.password)
    if (user) {
      const token = authService.generateToken(user.id)
      res.status(200).json({ message: 'Login successful', token })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error })
  }
}

// Additional functions for updateUser, deleteUser, and getUser can be added here.
