import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from "bootstrap";

import { router } from './router';

import VueAwesomePaginate from "vue-awesome-paginate";

createApp(App).use(router).use(VueAwesomePaginate).mount('#app')
