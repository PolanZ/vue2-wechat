<template>
	<div class="full_router detail">
		<div class="full_inner">
			<top-handle title="个人资料"></top-handle>
			<div class="content">
				
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import TopHandle from '../top_handle.vue'

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