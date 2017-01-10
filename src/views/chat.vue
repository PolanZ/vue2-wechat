<template>
	<div class="chat-content">
		<transition name="slideHome">
		<div class="chat-list-content" v-show="decline">
			<router-link class="chat-list" to="/chat/detail" v-for="item in wechat_list">
				<div class="userImg">
					<img :src="item.base.iconSrc" alt="">
				</div>
				<div class="userInfo">
					<div class="endTime">{{ item.chatBaseModel.endTimeStr | ftDate }}</div>
					<div class="userName">{{ item.base.name }}</div>
					<div class="message">{{ item.chatBaseModel.endChatTxt }}</div>
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
		overflow: hidden;
	}
	.userImg img {
		width: 48px;
		height: 48px;
		overflow: hidden;
	}
	.userInfo {
		position: relative;
		flex: 1;
		margin-left: 10px;
		overflow: hidden;
	}
	.userInfo .endTime {
		position: absolute;
		right: 0;
		top: 0;
		color: #ccc;
		font-size: 13px;
	}
	.userName {
		margin-bottom: 2px;
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
				wechat_list: [],
				decline: false
			}
		},
		created () {
			this.decline = true,
			this.$store.dispatch('setMenuWechatList')
			let chatStore = this.$store.state.chat
			this.wechat_list = chatStore.wechat_list
			// console.log(this.wechat_list)
		},
		filters: {
			ftDate (val) {
				let endDate = new Date(parseInt(val) * 1000),
					year = endDate.getFullYear(),
					month = endDate.getMonth(),
					day = endDate.getDate(),
					hour = endDate.getHours(),
					min = endDate.getMinutes()
				// console.log(year, (new Date()).getFullYear())
				if (year < (new Date()).getFullYear()) {
					// let date = endDate.toLocaleTimeString().replace(/年|月/g, "-").replace(/日/g, " ")
					return year +'/'+ month +'/'+ day
				}
				return hour + ':' + (min.toString().length==1 ? '0'+min : min)
			}
		},
		watch: {
			'$route' (to, from) {
				if(['/chat', '/contact', '/find', '/me'].indexOf(to.path) != -1) {
					this.decline = true
				}else {
					this.decline = false
				}
			}
		},
		methods: {

		}
	}
</script>