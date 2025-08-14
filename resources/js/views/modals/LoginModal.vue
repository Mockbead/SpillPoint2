<template>
    <Login @login-success="handleLoginSuccess" />
</template>

<script setup>
import { defineEmits } from 'vue'
import Login from '../auth/Login.vue'

const emit = defineEmits(['close'])

function handleLoginSuccess() {
    emit('close')
}
</script>
