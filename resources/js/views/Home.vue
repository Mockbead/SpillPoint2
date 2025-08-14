<script setup>
import { ref, onMounted } from 'vue';
import { useIndexStore } from '../stores/indexStore';

const indexStore = useIndexStore();

onMounted(() => {
    indexStore.fetchIndex()
});
</script>

<template>
    <div>
        <h1>{{ indexStore.title ?? 'NotFound' }}</h1>
    </div>
</template>

<style scoped>
</style>
