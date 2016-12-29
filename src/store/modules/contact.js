import {CONTACT_FRIENDS} from '../mutations-types'

import friends from '../../mock/contact'

const state = {
	friends: []
}

const mutations = {
	[CONTACT_FRIENDS] (state, friends) {
		state.friends = friends
	}
}

const actions = {
	contactFriends ({commit}) {
		commit('CONTACT_FRIENDS', friends)
	}
}

export default {
	state,
	mutations,
	actions
}