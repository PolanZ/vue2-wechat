import {SET_MENU_WECHAT_LIST} from '../mutations-types'

import wechat_list from '../../mock/chat'

const state = {
	wechat_list: [],
	chat_base: {
		"id": 1,
		"name": "聊天中",
		"wxid": "",
		"qq": "",
		"email": "",
		"type": "friends",
		"iconSrc": "",
		"qrCode": "",
		"signature": ""
	}
}

const mutations = {
	[SET_MENU_WECHAT_LIST] (state, list) {
		state.wechat_list = list
	}
}

const actions = {
	setMenuWechatList ({ commit }) {
		commit('SET_MENU_WECHAT_LIST', wechat_list)
	}
}

export default {
	state,
	mutations,
	actions
}