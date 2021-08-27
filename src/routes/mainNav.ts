import { messengerNav, messengerRoutes } from 'features/chat/nav'
import { homeNav, homeRoutes } from 'features/home/nav'
import { loginNav, loginRoutes } from 'features/authentication/login/nav'

export const mainNav = [...loginNav, ...messengerNav, ...homeNav]

console.log('mainNav', mainNav)

export const routes = [loginRoutes, messengerRoutes, homeRoutes]

console.log('route....', routes)
