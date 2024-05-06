import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
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
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ name:'Dashboard', path: '/Dashboard', component: () => import('pages/dashboard/dashboardPage.vue') }],
  },
];

export default routes;
