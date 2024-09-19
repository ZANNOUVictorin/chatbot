import { createRouter, createWebHistory } from 'vue-router';
import  input from '../views/input.vue';

const routes = [
  {
    path: '/',

    component: input,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
