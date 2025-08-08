<template>
    <div>
        <h1>{{ title ?? 'Flabbergasted' }}</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const title = ref('');

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/index', { withCredentials: true });
        title.value = response.data.title;
    } catch (error) {
        console.error('API error:', error);
    }
});
</script>


<style scoped>
</style>
