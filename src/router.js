import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import ShowCard from './pages/ShowCard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about-us',
        name: 'about-us',
        component: About,
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
      },
      {
        path: '/cocktails',
        name: 'cocktails.show',
        component: ShowCard,
      },
    ]
  });
  
  export { router };