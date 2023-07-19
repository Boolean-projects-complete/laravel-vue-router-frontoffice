import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: AppHome,
      },
      {
        path: '/about-us',
        name: 'about-us',
        component: AppAbout,
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: AppContacts,
      },
    ]
  });
  
  export { router };