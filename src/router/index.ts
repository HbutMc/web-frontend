import Home from '@/views/Home.vue'
import Server from '@/views/Server.vue'
import Wiki from '@/views/Wiki.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/wiki',
      component: Wiki,
    },
    {
      path: '/server',
      component: Server,
    },
  ],
})

export default router
