import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return <>{children}</>
}

export default PrivateRoute
