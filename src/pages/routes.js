import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './home/Home.vue';
import Cart from './cart/Cart.vue';
import LogIn from './user/sign-in/LogIn.vue';
import NotFoundPage from './NotFoundPage.vue';
import { useAuthStore } from '/src/store/auth.js';

const routes = [
  {
    path: '/home',
    component: Homepage,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/login',
    component: LogIn,
  },
  {
    path: "/:catchAll(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // Redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.isAuthenticated) {
    auth.setLandingUrl(to.fullPath);
    next('/login');
  } else {
    next();
  }
});

export default router;
