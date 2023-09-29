// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/signup',
    component: () => import('@/layouts/default/Home.vue'),
    children: [
      {
        path: '',
        name: 'Signup',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Signup.vue'),
      },
    ],
  },
  {
    path: '/verify',
    component: () => import('@/layouts/default/Home.vue'),
    children: [
      {
        path: '',
        name: 'Verify',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Verify.vue'),
      },
    ],
  },
  {
    path: '/password',
    component: () => import('@/layouts/default/Home.vue'),
    children: [
      {
        path: '',
        name: 'Password',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Password.vue'),
      },
    ],
  },
  {
    path: '/forgotpassword',
    component: () => import('@/layouts/default/Home.vue'),
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ForgotPassword.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
