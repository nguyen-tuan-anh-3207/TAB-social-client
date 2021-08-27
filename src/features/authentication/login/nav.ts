import createNav from 'routes/generator'
import DynamicImport from 'components/Layouts/DynamicImport'

export const navName = 'login'

const LoginPage = DynamicImport(() => import('./index'))

export const nav = [
  {
    component: LoginPage,
    isProtected: false,
    path: `/login`
  }
]

export const { loginRoutes, loginResources, loginNav } = createNav({
  name: navName,
  nav: nav
})
