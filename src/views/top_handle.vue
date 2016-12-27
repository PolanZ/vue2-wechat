<template>
	<div class="topHandle">
		<div class="cover_top">
			<div class="cover_left" @click="goback">back</div>
			<div class="cover_center">{{ title }}</div>
			<div class="cover_right"></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	props: ['title'],
	methods: {
		goback () {
			this.$router.go(-1)
		}
	}
}
</script>