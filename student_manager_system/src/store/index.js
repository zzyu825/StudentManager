import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stuList: [],
    nowPage: 1,
    limit: 3,
    totalPage: 0,
    keyWord: "",
    count: 0
  },
  mutations: {
    setList(state, list) {
      state.stuList = list;
    }
  },
  actions: {
    getStuList({ commit, state: { nowPage, limit } }) {
      // console.log(context);
      axios.find_by_page(nowPage, limit).then(data => {
        // console.log(data);
        commit('setList', data.data.data.findByPage);
      })
    }
  },
  modules: {
  }
})
