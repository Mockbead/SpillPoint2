import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router setup
import { createPinia } from 'pinia';
import axios from 'axios';

// Import Bootstrap and BootstrapVue 3 CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import BootstrapVue3 from 'bootstrap-vue-3';

// Import Primevue
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

const app = createApp(App);

// Use third-party plugins before mounting
app.use(router);
app.use(createPinia());
app.use(BootstrapVue3);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});

// Set axios as global property for easy access in components
app.config.globalProperties.$axios = axios;

// Mount the Vue app
app.mount('#app');
