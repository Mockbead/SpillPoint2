<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useAuthStore} from '../stores/auth';
import LoginModal from '../views/modals/LoginModal.vue';
import {BModal, BButton} from 'bootstrap-vue-3';
import Dialog from 'primevue/dialog';

const showLoginModal = ref(false);
const router = useRouter();
const auth = useAuthStore();

//Logo
const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color5'];
const text = 'SpillPoint';
const characters = Array.from(text);

async function logout() {
    try {
        await auth.logout();
        router.push('/login');
    } catch {
        alert('Logout failed. Please try again.');
    }
}

function openLoginModal() {
    showLoginModal.value = true;
}

function closeLoginModal() {
    showLoginModal.value = false;
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-3">
        <div class="container-fluid">
            <!-- Brand placeholder, remove or customize -->
            <a class="navbar-brand" href="#" style="margin-left: 1rem">
                <div style="font-size: 35px; letter-spacing: -0.21em; display: flex; gap: 0.1em;">
                    <span v-for="(char, i) in characters" :key="i" :class="colorClasses[i % colorClasses.length]">
                      {{ char }}
                    </span>
                </div>
            </a>

            <!-- Navbar toggler for mobile -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible nav links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><router-link to="/" class="nav-link" exact-active-class="active" exact>Home</router-link></li>
                    <li class="nav-item" v-if="auth.isLoggedIn"><router-link to="/profile" class="nav-link" active-class="active">Profile</router-link></li>
                    <li class="nav-item" v-if="auth.isLoggedIn"><router-link to="/settings" class="nav-link" active-class="active">Settings</router-link></li>
                    <li class="nav-item"><a href="https://www.formula1.com/en/racing/2025" target="_blank" rel="noopener noreferrer" class="nav-link text-primary">Schedule</a></li>
                </ul>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-if="auth.isLoggedIn"><button type="button" @click="logout" class="btn btn-link nav-link" style="text-decoration: underline; cursor: pointer;">Logout</button></li>
                    <li class="nav-item" v-else><button type="button" @click="openLoginModal" class="btn btn-link nav-link" style="text-decoration: underline; cursor: pointer;">Login</button></li>
                </ul>
            </div>
        </div>

        <!-- PrimeVue Dialog -->
        <Dialog v-model:visible="showLoginModal" :modal="true" :closable="true" dismissableMask style="width: 400px;">
            <template #header>
                <h3 class="header">Login</h3>
            </template>
            <LoginModal @close="closeLoginModal" />
        </Dialog>
    </nav>
</template>


<style scope>
.header {
    color: var(--login-header);
    font-weight: bold;
}
.color1 { color: var(--logo-color1); }
.color2 { color: var(--logo-color2); }
.color3 { color: var(--logo-color3); }
.color4 { color: var(--logo-color4); }
.color5 { color: var(--logo-color5); }
</style>
