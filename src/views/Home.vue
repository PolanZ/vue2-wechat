<template>
	<header class="app-header">
      <transition name="slide">
        <app-header></app-header>
      </transition>
    </header>
    <section class="app-content">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </section>
    <footer class="app-footer">
      <transition name="slide">
        <app-footer></app-footer>
      </transition>
    </footer>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	data () {
		return {

		}
	},
	components: {
		'app-header': Header,
    	'app-footer': Footer
	}
}
</script>