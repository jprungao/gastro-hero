import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/index.vue'
import ProductDetails from '../components/productDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        return {
          path: '/products',
        }
      }
    },
    {
      path: '/products',
      name: 'home',
      component: home,
    },
    {
      path: '/product/:sku',
      name: 'productDetails',
      props: true,
      component: ProductDetails
    }
  ]
})

export default router
