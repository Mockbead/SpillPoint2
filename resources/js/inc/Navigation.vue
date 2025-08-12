<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const auth = useAuthStore();

async function logout() {
    try {
        await auth.logout();
        router.push('/login');
    } catch {
        alert('Logout failed. Please try again.');
    }
}
</script>

<template>
    <nav>
        <ul style="display:flex; list-style:none; gap:1rem; padding:0; margin:0;">
            <li><router-link to="/" exact-active-class="active" style="text-decoration:none;">Home</router-link></li>
            <li v-if="auth.isLoggedIn"><router-link to="/profile" active-class="active" style="text-decoration:none;">Profile</router-link></li>
            <li v-if="auth.isLoggedIn"><router-link to="/settings" active-class="active" style="text-decoration:none;">Settings</router-link></li>
            <li><a href="https://www.formula1.com/en/racing/2025" target="_blank" rel="noopener noreferrer" style="color:blue; text-decoration:underline; cursor:pointer;">Schedule</a></li>
            <li v-if="auth.isLoggedIn">
                <button @click="logout" style="cursor:pointer; background:none; border:none; color:blue; text-decoration:underline; padding:0; font-size:1em;">
                    Logout
                </button>
            </li>
            <li v-else>
                <router-link to="/login" style="text-decoration:none;">Login</router-link>
            </li>
        </ul>
    </nav>
</template>
