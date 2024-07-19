import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // Error Routes
  {
    path: '/:catchAll(.*)*',
    component: () => import('../../public/ErrorNotFound.vue'),
  },

  // Login Routes
  {
    path: '/Login',
    component: () => import('src/layouts/LoginLayout.vue'),
    children: [
      {
        name: 'Login',
        path: '',
        component: () => import('pages/login/loginPage.vue'),
      },
    ],
  },

  // Landing Routes
  {
    path: '/',
    component: () => import('src/layouts/landingLayout.vue'),
    children: [{ name: 'Landing', path: '/', component: () => import('pages/landing/landingPage.vue') }],
  },

  // Main Routes
  {
    path: '/online',
    component: () => import('src/layouts/mainLayout.vue'),
    children: [
      { name: 'Emigrants', path: '/Emigrants', component: () => import('pages/emigrant/list/emigrantListPage.vue') },
    ],
  },
];

export default routes;
