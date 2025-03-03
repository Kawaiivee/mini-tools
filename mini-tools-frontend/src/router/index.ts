import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work-item-formatter',
      name: 'work-item-formatter',
      component: () => import('../views/WorkItemFormatterView.vue'),  // lazy load all that are not home
    },
  ],
})

export default router;
