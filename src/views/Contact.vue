<template>
	<div style="height: 100%;">
		<div class="full_inner contact_component">
			<transition name="slideHome">
			<div v-show="decline">
				<div class="weui_cells_contact-head weui_cells weui_cells_access">
					<router-link to="/contact/new-friends" class="weui_cell">
						<div class="weui_cell_hd">
							<img class="img-obj-cover" src="../assets/images/contact_top-friend-notify.png" >
						</div>
						<div class="weui_cell_bd weui_cell_primary">
							<p>新的朋友</p>
						</div>
					</router-link>
					<router-link to="/contact/new-friends" class="weui_cell">
						<div class="weui_cell_hd">
							<img class="img-obj-cover" src="../assets/images/contact_top-addgroup.png" >
						</div>
						<div class="weui_cell_bd weui_cell_primary">
							<p>群聊</p>
						</div>
					</router-link>
					<router-link to="/contact/new-friends" class="weui_cell">
						<div class="weui_cell_hd">
							<img class="img-obj-cover" src="../assets/images/contact_top-tag.png" >
						</div>
						<div class="weui_cell_bd weui_cell_primary">
							<p>标签</p>
						</div>
					</router-link>
					<router-link to="/contact/new-friends" class="weui_cell">
						<div class="weui_cell_hd">
							<img class="img-obj-cover" src="../assets/images/contact_top-offical.png" >
						</div>
						<div class="weui_cell_bd weui_cell_primary">
							<p>公众号</p>
						</div>
					</router-link>
				</div>
				<div class="contact-friends">
					<div v-for="item in friends">
						<p class="contact-alpha">{{item.alpha}}</p>
						<div class="weui_cells weui_cells_access">
		                    <div class="weui_cell" v-for="list in item.list">
		                        <div class="weui_cell_hd">
		                            <img :src="list.iconSrc"></div>
		                        <div class="weui_cell_bd weui_cell_primary">
		                            <p>{{ list.remark || list.name }}</p>
		                        </div>
		                    </div>
		                </div>
					</div>
				</div>
			</div>
			</transition>
		</div>

		<transition name="slide">
			<router-view></router-view>
		</transition>
	</div>
</template>

<style scoped>
	.contact_component {
		background: #f1f0f6;
		overflow: auto;
	}
	.weui_cells_contact-head {
		margin-top: -1px;
	}
	.weui_cells_contact-head .weui_cell {
		padding: 9px 15px;
	}
	.weui_cells_contact-head .weui_cell_hd {
		height: 36px;
		width: 36px;
		overflow: hidden;
		margin-right: 10px;
	}
	.img-obj-cover {
		display: block;
		border: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.contact-alpha {
		padding-left: 15px;
		height: 20px;
		line-height: 20px;
		font-size: 14px;
		color: #888;
	}
	.contact-friends .weui_cells {
		margin-top: 0;
	}
	.contact-friends .weui_cell_hd img {
		width: 35px;
		margin-right: 5px;
		display: block;
	}
	.contact-friends .weui_cell_primary {
		font-size: 15px;
	}
</style>

<script>
	export default {
		data () {
			return {
				decline: false,
				friends: []
			}
		},
		created () {
			this.decline = true
			this.$store.dispatch('contactFriends')
			this.friends = this.$store.state.contact.friends
		},
		watch: {
			'$route' (to, from) {
				if(['/chat', '/contact', '/find', '/me'].indexOf(to.path) != -1) {
					this.decline = true
				}else {
					this.decline = false
				}
			}
		}
	}
</script>