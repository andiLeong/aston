import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/aston',
    name: 'aston',
    component: () => import('@/views/Aston.vue'),
  },
  {
    path: '/offer',
    name: 'offer',
    component: () => import('@/views/Offer.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'border-b-sky-500 text-gray-900 border-b-2',
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});


export default router;
