//libs
import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import NormalRoute from '../components/Route/NormalRoute'
// constants
// import { useGetUser } from 'hooks/globalStores/useAuthStore'
// import { getCookie } from 'extensions/auth'
// import { AUTH_USER } from 'constants/string'
import ProtectedRoute from '../components/Route/ProtectedRoute'
import { mainNav } from '../routes/mainNav'

const FrontEndRoutes = (props: any) => {
  // const user = useGetUser()

  // const isAuth = !!(user || getCookie(AUTH_USER))
  const isAuth = true

  const generateFrontEndRoute = (data: any, index: number) => {
    if (!data) {
      return null
    }

    if (data.children && data.children.length > 0) {
      return data.children.map((item: any, index: number) =>
        generateFrontEndRoute(item, index)
      )
    }

    if (!data.component) {
      return null
    }

    if (data.isProtected) {
      return (
        <ProtectedRoute
          {...props}
          key={() => Math.random()}
          path={data.path}
          component={data.component}
          isAuth={isAuth}
        />
      )
    }

    return (
      <NormalRoute
        {...props}
        key={index}
        path={data.path}
        component={data.component}
      />
    )
  }

  const generateDefaultPage = () => {
    return <Redirect to={'/'} />
  }

  return (
    <Switch>
      {mainNav.map((data: any, index: number) =>
        generateFrontEndRoute(data, index)
      )}
      {generateDefaultPage()}
    </Switch>
  )
}

export default FrontEndRoutes
