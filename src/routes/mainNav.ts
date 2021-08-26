import { messengerNav, messengerRoutes } from '../features/chat/nav'
import { homeNav, homeRoutes } from '../features/home/nav'

export const mainNav = [...messengerNav, ...homeNav]

console.log('mainNav', mainNav)

export const routes = [messengerRoutes, homeRoutes]

console.log('route....', routes)
