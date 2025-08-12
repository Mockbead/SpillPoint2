import { defineStore } from 'pinia';
import axios from '../axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({ user: null }),
    getters: {
        isLoggedIn: (state) => !!state.user,
    },
    actions: {
        async fetchUser() {
            try {
                const { data } = await axios.get('/api/user');
                this.user = data;
            } catch {
                this.user = null;
            }
        },
        async login(credentials) {
            await axios.get('/sanctum/csrf-cookie'); // fetch CSRF cookie first
            await axios.post('/login', credentials); // pass credentials in POST body
            await this.fetchUser();                  // fetch user after login
        },
        async logout() {
            await axios.post('/logout');
            this.user = null;
        },
    },
});
