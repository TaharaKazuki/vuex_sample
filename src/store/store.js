import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  message: '初期メッセージ'
};

const getters = {
  message: state => state.message
};

const mutations = {
  setMessage: (state, payload) => {
    state.message = payload
  }
};

const actions = {
  getMessage: ({ commit }) => {
    axios.get('/api/message').then((res)=>{
      commit('setMessage',res.data.message)
    });
  },
  saveMessage: ({ state }) => {
    axios.put('/api/message',{ message: state.message })
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
