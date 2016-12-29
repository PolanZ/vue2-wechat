import Vue from 'vue'
import Vuex from 'vuex'

import chat from './modules/chat'
import contact from './modules/contact'

Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		chat,
		contact
	},
	strict: true
})