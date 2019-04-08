import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

const store = new Vuex.Store({actions,mutations,getters,state});

export default store;