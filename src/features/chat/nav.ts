import createNav from 'routes/generator'
import DynamicImport from 'components/Layouts/DynamicImport'

export const navName = 'messenger'

const Messenger = DynamicImport(() => import('./index'))

export const nav = [
  {
    component: Messenger,
    isProtected: false,
    path: `/messenger`
  }
]

export const { messengerRoutes, messengerResources, messengerNav } = createNav({
  name: navName,
  nav: nav
})
