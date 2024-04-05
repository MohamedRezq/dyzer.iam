// src/types/express.d.ts
// Type definitions to extend Express types

import { User } from '@prisma/client'

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}
