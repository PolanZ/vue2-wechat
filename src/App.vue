<template>
  <div id="app">
    <header class="app-header">
      <transition name="slideHome">
        <app-header v-show="decline"></app-header>
      </transition>
    </header>
    <section class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
    <footer class="app-footer">
      <transition name="slideHome">
        <app-footer v-show="decline"></app-footer>
      </transition>
    </footer>

    <!--mask layer-->
    <transition name="welcome">
      <section class="welcome" v-show="welcome"></section>
    </transition>
    
  </div>
</template>

<script>
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
      welcome: true,
      appload: false, // 主体内容
      decline: false, // route animation
    }
  },
  created () {
    this.decline = true
    setTimeout(() => {
      this.welcome = false;
    }, 2000)
  },
  watch: {
    '$route' (to, from) {
      // console.log(to)
      if(to.path == '/chat'||to.path == '/find'||to.path == '/contact'||to.path == '/me') {
        this.decline = true
      }else {
        this.decline = false
      }
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style >
</style>
