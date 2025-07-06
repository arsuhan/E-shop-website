import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      // component: () => import('../'),

    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../views/Header.vue'),
    },
    // {
    //   path: '/hero',
    //   name: 'hero',
    //   component: () => import('../views/Hero.vue'),
    // },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/all-product',
      name: 'allproduct',
      component: () => import('../views/All-Product.vue'),
    },
    {
      path: '/i-phone',
      name: 'iphone',
      component: () => import('../views/I-Phone.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('../views/Footer.vue'),
    },


    {
      path: '/product/:index',
      name: 'ProductDetails',
      component: () => import('@/views/ProductDetails.vue')
}
  ],
})

export default router
