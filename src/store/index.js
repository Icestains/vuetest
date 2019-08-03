import Vue from 'vue'
import Vuex from 'vuex'

import state from './main/state'
import mutations from './main/mutations'
import getters from "./main/getters"

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions: {
        increment (context) {
            context.commit('increment')
        }
    }
})