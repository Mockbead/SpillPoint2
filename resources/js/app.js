require('./bootstrap');

import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router'; // your Vue router setup
import { createPinia } from 'pinia';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000'; // Laravel backend URL

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.config.globalProperties.$axios = axios;

app.mount('#app');
