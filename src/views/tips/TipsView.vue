<template>
  <div v-for="tip in tips" :key="tip.id" class="tip">
    <router-link :to="{ name: 'tipDetails', params: {id: tip.id}}">
      <h3>{{ tip.title }}</h3>
    </router-link>
    
  </div>
</template>

<script>
export default {
    data (){
        return {
            tips: [
            {id: 1, title: 'washing your stomach', author: 'fab' },
            {id: 2, title: 'coding without degree', author: 'eric' },
            {id: 3, title: 'annotating image', author: 'reagun' },
            ]
        }
    }
}
</script>

<style>
  .tip h3 {
    padding: 20px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
    background: #f4f4f4;
    border-radius: 10px;
  }
  .tip h3:hover {
    background: #ddd;
  }
  .tip a {
    text-decoration: none;
  }
</style>