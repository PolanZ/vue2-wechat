<template>
	<div class="chat-content">
		<transition name="slideHome">
		<div class="chat-list-content" v-show="decline">
			<router-link class="chat-list" to="/chat/detail">
				<div class="userImg"></div>
				<div class="userInfo">
					<div class="userName">PolanXXXX</div>
					<div class="message">今晚去打球？今晚去打球？今晚去打球？今晚去打球？今晚去打球？</div>
				</div>
			</router-link>
		</div>
		</transition>
		<transition name="slide">
			<router-view></router-view>
		</transition>
	</div>
</template>

<style scoped>
	.chat-list {
		display: flex;
		flex-basis: 100%;
		align-items: center;
		padding: 8px 12px;
		height: 65px;
		border-bottom: 1px solid #e9e9e9;
		text-decoration: none;
		color: #333;
	}
	.chat-list:active, .chat-list:focus {
		background-color: #ddd;
	}
	.userImg {
		width: 48px;
		height: 48px;
		background-color: #eee;
		border-radius: 4px;
	}
	.userInfo {
		flex: 1;
		margin-left: 15px;
		overflow: hidden;
	}
	.userName {
		margin-bottom: 10px;
	}
	.message {
		width: 90%;
		color: #999;
		font-size: 88%;
		overflow: hidden;
		word-break: break-all;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>

<script>
	export default {
		data () {
			return {
				decline: false
			}
		},
		created () {
			this.decline = true
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
	}
</script>