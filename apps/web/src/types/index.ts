export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface AuthToken {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface ApiError {
  statusCode: number
  message: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}
