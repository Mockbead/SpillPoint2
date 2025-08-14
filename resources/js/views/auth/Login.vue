<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import { defineEmits } from 'vue'
// Fetch CSRF cookie on component mount (optional if your store login fetches it)
import { onMounted } from 'vue'
import axios from '../../axios'
import Button from "primevue/button"

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

// Expose loading from store or create local if your store doesn't have it
const loading = ref(false)

const emit = defineEmits(['login-success'])

async function login() {
    if (loading.value) return
    loading.value = true
    try {
        await auth.login({ email: email.value, password: password.value })
        emit('login-success')
        router.push('/')
    } catch (error) {
        alert('Login failed: ' + (error.response?.data?.message || error.message))
    } finally {
        loading.value = false
    }
}

onMounted(async () => {
    try {
        await axios.get('/sanctum/csrf-cookie')
    } catch (e) {
        console.error('Failed to fetch CSRF cookie on mount', e)
    }
})
</script>

<template>
    <div>
        <form @submit.prevent="login">
            <input class="" v-model="email" placeholder="Email" type="email"  required/>
            <input class="" v-model="password" placeholder="Password" type="password" required/>
            <button class="btn btn-primary" type="submit" :disabled="loading">Login</button>
        </form>
    </div>
</template>

<style scoped>
    .form-control {
        margin-bottom: 10px;
    }
</style>
