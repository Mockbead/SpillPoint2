import { defineStore } from 'pinia';
import axios from '../axios';
import { ref } from 'vue';

export const useIndexStore = defineStore('index', () => {
    const title = ref('');
    const error = ref(null);

    async function fetchIndex() {
        try {
            const res = await axios.get('/api/index', { withCredentials: true });
            title.value = res.data.title;
        } catch (e) {
            error.value = e;
        }
    }

    return { title, error, fetchIndex };
});
