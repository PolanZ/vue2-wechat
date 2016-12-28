import Vue from 'vue'
import VueRouter from 'vue-router'

import Chat from '../views/chat.vue'
import ChatDetail from '../views/chat/chat-detail.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	redirect: '/chat'	// 重定向
},{
	path: '/chat',
	component: Chat,
	children: [{
		path: 'detail',
		component: ChatDetail
	}]
}]

const router = new VueRouter({
	routes
})

export default router
