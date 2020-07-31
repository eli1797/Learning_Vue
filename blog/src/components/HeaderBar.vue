<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li class="is-active"><a href="#" aria-current="page">How to build a beautiful blog</a></li>
    </ul>
    <!-- <router-view/> -->
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {}
}
</script>