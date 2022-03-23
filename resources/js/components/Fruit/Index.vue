<template>

    <div>
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <th>{{ fruit.id }}</th>
                <th>{{ fruit.name }}</th>
                <th>{{ fruit.price }}</th>
            </tr>
            </tbody>
        </table>
    </div>


</template>

<script>
export default {
    name: "Index",

    data(){
        return {
            fruits: null
        }
    },

    mounted() {
        this.getFruits()
    },
    methods:{
        getFruits(){
            axios.get('/api/fruits')
            .then(result => {
                this.fruits = result.data.data
            })
        },
    }

}
</script>

<style scoped>

</style>
