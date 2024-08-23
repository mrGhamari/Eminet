import { RouteRecordRaw } from 'vue-router';

//! ------ Login & Register Routes ------
import LoginPage from 'pages/login/loginPage.vue';
import LoginLayout from 'src/layouts/LoginLayout.vue';

//! ------ Landing Routes ------
import LandingPage from 'pages/landing/landingPage.vue';
import LandingLayout from 'src/layouts/landingLayout.vue';

//! ------ Main Routes ------
import MainLayout from 'src/layouts/mainLayout.vue';
import Emigrants from 'pages/emigrant/list/emigrantListPage.vue';

const routes: RouteRecordRaw[] = [
  // Error Routes
  {
    path: '/:catchAll(.*)*',
    component: () => import('../../public/ErrorNotFound.vue'),
  },

  //* ------ Login & Register Routes ------
  {
    path: '/Login',
    component: LoginLayout,
    children: [{ path: '', name: 'Login', component: LoginPage }],
  },

  //* ------ Landing Routes ------
  {
    path: '/',
    component: LandingLayout,
    children: [{ name: 'Landing', path: '/', component: LandingPage }],
  },

  //* ------ Main Routes ------
  {
    path: '/online',
    component: MainLayout,
    children: [{ name: 'Emigrants', path: '/Emigrants', component: Emigrants }],
  },
];

export default routes;
