<template>
    <div>
        <div class="w-25">
            <input type="text" v-model="name" placeholder="Name" class="form-control  my-3">
            <input type="email" v-model="email" placeholder="Email" class="form-control mb-3">
            <input type="password" v-model="password" placeholder="Password" class="form-control mb-3">
            <input type="password" v-model="password_confirmation" placeholder="Confirm Password"
                   class="form-control  mb-3">
            <input @click.prevent="register" type="submit" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },

    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {

                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(result => {
                        localStorage.setItem('x_xsrf_token', result.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name: 'user.personal'})
                    })
            })
        }
    },


}
</script>

<style scoped>

</style>
