<template>
	<div class="meContent">
		<div class="weui_cells weui_cells_access me-list">
			<div class="weui_cell">
				<div class="weui_cell_hd">
					<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3040533120,2016018949&fm=21&gp=0.jpg" alt="">
				</div>
				<div class="weui_cell_bd weui_cell_primary">
					<p>Polan Test</p>
					<p>微信号：wx_iwjfl176451</p>
				</div>
				<div class="weui_cell_ft">
					<img src="../assets/images/chat-info-qr.png" style="height: 25px;vertical-align: middle;">
				</div>
			</div>
		</div>
		<div class="weui_cells weui_cells_access">
			<div class="weui_cell">
				<div class="weui_cell_hd">
					<img src="../assets/images/me_more-my-album.png" alt="">
				</div>
				<div class="weui_cell_bd weui_cell_primary">
					<p>相册</p>
				</div>
				<div class="weui_cell_ft">
					
				</div>
			</div>
			<div class="weui_cell">
				<div class="weui_cell_hd">
					<img src="../assets/images/me_more-my-favorites.png" alt="">
				</div>
				<div class="weui_cell_bd weui_cell_primary">
					<p>收藏</p>
				</div>
				<div class="weui_cell_ft">
					
				</div>
			</div>
		</div>

	</div>
</template>

<style type="text/css">
	.meContent {
		overflow: auto;
	    padding-top: 1px;
		background-color: #f1f0f6;
		height: 100%;
	}
	.meContent .weui_cells .weui_cell_hd img {
	    width: 20px;
	    margin-right: 10px;
	    display: block;
	}
	.me-list .weui_cell_hd {
		margin-right: 5px;
		border-radius: 5px;
		overflow: hidden;
		border: 1px solid #ccc;
	}
	.me-list .weui_cell_hd img {
		width: 60px !important;
		margin-right: 0 !important;
		display: block;
	}
	.me-list .weui_cell_primary {
		font-size: 14px;
		color: #111;
	}
	.me-list .weui_cell_primary p:first-child {
		font-size: 18px;
	}
	.me-list .weui_cell_primary p:last-child {
		color: #777;
	}
</style>