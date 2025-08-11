<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="email" placeholder="Email" type="email" />
            <input v-model="password" placeholder="Password" type="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from '../../axios'

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            try {
                await axios.get('/sanctum/csrf-cookie')
                await axios.post('/login', {
                    email: this.email,
                    password: this.password,
                })
                this.$router.push('/')
            } catch (e) {
                alert('Login failed')
            }
        },
    },
}
</script>
