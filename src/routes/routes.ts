import News from '~/pages/News'
import About from '~/pages/About'
import Detail from '~/pages/Detail'
import Main from '~/pages/Main'
import Contact from '~/pages/Contact'

export const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/contact',
    component: Contact
  }
]
