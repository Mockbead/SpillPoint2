<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <input v-model="name" placeholder="Name" type="text" />
            <input v-model="email" placeholder="Email" type="email" />
            <input v-model="password" placeholder="Password" type="password" />
            <input v-model="password_confirmation" placeholder="Confirm Password" type="password" />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import axios from '../../axios'

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        async register() {
            try {
                await axios.get('/sanctum/csrf-cookie')
                await axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                this.$router.push('/login')
            } catch (e) {
                alert('Registration failed')
            }
        },
    },
}
</script>
