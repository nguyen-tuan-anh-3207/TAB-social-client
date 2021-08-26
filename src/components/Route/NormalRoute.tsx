import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

interface PublicRouteProps extends RouteProps {
  component: any
}

const NormalRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return <Route render={(props) => <Component {...props} />} {...rest} />
}

export default NormalRoute
