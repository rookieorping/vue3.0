import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 起到懒加载的作用，用到这个页面的时候才会加载
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  { // 动态路由
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  },
  { // 嵌套路由
    path: '/parent',
    component: () => ('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => ('@/views/child.vue')
      }
    ]
  },
  { // 命名视图
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    // redirect: '/',
    // redirect: {
    //   name: 'Home'
    // }
    redirect: to => {
      return '/'
    }
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue'),
    name: 'store',
    meta: {
      title: 'store'
    }
  }
]
