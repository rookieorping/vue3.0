import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  to.meta && to.meta.title && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
  } else {
    if (HAS_LOGINED) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
})
export default router
