<template>
	<div class="full_router">
		<div class="full_inner">
			<top-handle title="对话" backName="微信" nextIcon="icon-chat-friends"></top-handle>
			<div class="content">
				
			</div>
		</div>
		<transition name="slide">
			<router-view></router-view>
		</transition>
	</div>
</template>

<style scoped>
	
</style>

<script>
import TopHandle from '../../components/top_handle.vue'

export default {
	data () {
		return {

		}
	},
	components: {
		'top-handle': TopHandle
	}
}
</script>