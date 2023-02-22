<template>
    <div>
        <h2>Page your looking for, Not Found</h2>
          <button @click="redirectHome">Go to Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        redirectHome(){
            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style>
    button{
        padding: 10px;
        margin: 0 10px;
        border: none;
        border-radius: 4px;
    }

</style>