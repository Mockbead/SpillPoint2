<script setup>
import { onMounted } from 'vue';
import Navigation from './inc/Navigation.vue';
import { useAuthStore } from './stores/auth';

const auth = useAuthStore();

onMounted(() => {
    auth.fetchUser();
});
</script>

<template>
    <navigation></navigation>
    <router-view />
</template>

<style>
/* global styles */
</style>
