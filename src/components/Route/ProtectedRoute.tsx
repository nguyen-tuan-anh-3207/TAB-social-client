import { routePath } from 'constants/router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

interface IProtectedRoute {
  component: any
  isAuth: boolean
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return isAuth ? (
    <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />
  ) : (
    <Redirect to={routePath.LOGIN} />
  )
}
export default ProtectedRoute
