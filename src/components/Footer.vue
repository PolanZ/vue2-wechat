<template>
	<nav>
		<div class="menu">
			<router-link to="/chat" tag="div">
				<div class="iconfont icon-wechat"></div>
	            <div class="text">微信</div>
			</router-link>
		</div>
		<div class="menu">
			<router-link to="/contact" tag="div">
				<div class="iconfont icon-contact"></div>
	            <div class="text">通讯录</div>
			</router-link>
		</div>
		<div class="menu">
			<router-link to="/find" tag="div">
				<div class="iconfont icon-find"></div>
	            <div class="text">发现</div>
			</router-link>
		</div>
		<div class="menu">
			<router-link to="/me" tag="div">
				<div class="iconfont icon-me"></div>
	            <div class="text">我的</div>
			</router-link>
		</div>
	</nav>
</template>

<style scoped>
	nav {
		display: flex;
		height: 100%;
		background-color: #f9f9f9;
		border-top: 1px solid #e9e9e9;
	}
	.menu {
		width: 25%;
		height: 100%;
		text-align: center;
	}
	.menu > div {
		padding-top: 5px;	
		display: inline-block;
		width: 60px;
		color: #666;
	}
	.menu > div > .iconfont {
		font-size: 24px;
	}
	.menu > div > .text {
		margin-top: 2px;
		font-size: 14px;
		color: #999;
	}
	.menu > div.router-link-active {
		color: #0bb908;
	}
</style>

<script>
	
</script>