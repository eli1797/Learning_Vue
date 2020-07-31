<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view/>
  </div>
</template>


<script>
  import HeaderBar from '@/components/HeaderBar.vue'

  export default {
    name: 'App',
    components: { 
      HeaderBar, 
    },
  }
  
</script>
<style>
</style>
