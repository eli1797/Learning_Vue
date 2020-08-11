<template>
  <div id="app">
    <HeaderBar v-bind:breadcrumb="currentRoute"></HeaderBar>
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
    watch: {
      '$route' () {
        this.currentRoute = this.$route.meta.breadcrumb
      } 
    }
  }
</script>