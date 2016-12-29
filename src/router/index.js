import Vue from 'vue'
import VueRouter from 'vue-router'

import Chat from '../views/Chat.vue'
import ChatDetail from '../views/chat/chat-detail.vue'

import Contact from '../views/Contact.vue'
import Find from '../views/Find.vue'
import Me from '../views/Me.vue'

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
},{
	path: '/contact',
	component: Contact,
	children: [{
		path: 'new-friends',
		component: ChatDetail
	}]
},{
	path: '/find',
	component: Find
},{
	path: '/me',
	component: Me
}]

const router = new VueRouter({
	routes
})

export default router
