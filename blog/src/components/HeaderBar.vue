<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li class="is-active"><a href="#" aria-current="page"> {{ breadcrumb }}</a></li>
    </ul>
    <!-- <router-view/> -->
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: ['breadcrumb'],
}
</script>