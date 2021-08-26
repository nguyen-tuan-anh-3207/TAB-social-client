import createNav from 'routes/generator'
import DynamicImport from 'components/Layouts/DynamicImport'

export const navName = 'home'

const HomePage = DynamicImport(() => import('./index'))

export const nav = [
  {
    component: HomePage,
    isProtected: false,
    path: `/`
  }
]

export const { homeRoutes, homeResources, homeNav } = createNav({
  name: navName,
  nav: nav
})
