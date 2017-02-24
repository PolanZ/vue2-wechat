<template>
	<div class="topHandle">
		<div class="cover_top">
			<div class="cover_left" @click="goback"><i class="iconfont icon-return-arrow"></i>{{ backName }}</div>
			<div class="cover_center">{{ title }}</div>
			<div class="cover_right"><i class="iconfont" :class="[ nextIcon ]"></i></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	props: {
		title: {
			type: String
		}, 
		backName: {
			type: String,
			default: '返回'
		},
		nextIcon: {
			type: String
		}
	},
	methods: {
		goback () {
			this.$router.go(-1)
		}
	}
}
</script>