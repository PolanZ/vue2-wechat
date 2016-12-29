<template>
	<nav>
		<div class="menu">
			<router-link to="/chat" tag="div">
				<span class="iconfont icon-wechat"></span>
	            <span class="text">微信</span>
			</router-link>
		</div>
		<div class="menu">
			<router-link to="/contact" tag="div">
				<span class="iconfont icon-contact"></span>
	            <span class="text">通讯录</span>
			</router-link>
		</div>
		<div class="menu">
			<router-link to="/find" tag="div">
				<span class="iconfont icon-find"></span>
	            <span class="text">发现</span>
			</router-link>
		</div>
		<div class="menu">
			<router-link to="/me" tag="div">
				<span class="iconfont icon-me"></span>
	            <span class="text">我的</span>
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
	.menu > div > span {
		display: block;
		line-height: 1;
	}
	.menu > div > .iconfont {
		font-size: 24px;
	}
	.menu > div > .text {
		margin-top: 2px;
		font-size: 12px;
		color: #999;
	}
	.menu > div.router-link-active, .menu > div.router-link-active > .iconfont, .menu > div.router-link-active > .text {
		color: #0bb908;
	}
</style>

<script>
	
</script>