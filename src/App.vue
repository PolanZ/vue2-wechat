<template>
  <div id="app">
    <header class="app-header">
      <app-header></app-header>
    </header>
  </div>
</template>

<script>
import './assets/css/reset.css'
import './assets/css/common.css'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>

<style >
</style>
