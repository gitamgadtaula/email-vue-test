
import { createRouter, createWebHistory } from 'vue-router'
import ArchievView from '../views/ArchievView.vue'
import InboxView from '../views/InboxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inbox',
      name: 'inbox',
      component: InboxView
    },
    {
      path: '/archiev',
      name: 'archiev',
      component: ArchievView

    }
  ]
})

export default router
