<template>
	<div class="full_router detail">
		<div class="full_inner">
			<top-handle title="个人资料"></top-handle>
			<div class="content">
				
			</div>
		</div>
		<transition name="slide">
			<router-view></router-view>
		</transition>
	</div>
</template>

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