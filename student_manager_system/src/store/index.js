import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stuAllList: [],
    stuList: [],
    nowPage: 1,
    limit: 2,
    totalPage: 0,
    showModal: false,
    editStu: {},
    searchValue: "",
    count: 0,
    panelNumber: 5
  },
  mutations: {
    setAllList(state, list) {
      state.stuAllList = list;
    },
    setList(state, list) {
      state.stuList = list;
    },
    setTotalPage(state, count) {
      state.totalPage = Math.ceil(count / state.limit);
      state.count = count;
    },
    setShowModal(state, bool) {
      state.showModal = bool;
    },
    setEditStu(state, stu) {
      state.editStu = stu;
    },
    setNowPage(state, n) {
      if (n == -1 && state.nowPage > 1) {
        state.nowPage--;
      } else if (n == 0 && state.nowPage < state.totalPage) {
        state.nowPage++;
      } else if (n != 0 && n != -1) {
        state.nowPage = n;
      }
    },
    setSearchValue(state, v) {
      // console.log(v);
      state.searchValue = v;
    }
  },
  actions: {
    getAllStuList({ commit }) {
      return axios.allStu().then(data => {
        // console.log(data);
        commit('setAllList', data.data);
      })
    },
    getStuList({ commit, state: { nowPage, limit } }) {
      // console.log(nowPage);
      // console.log(context);
      axios.findByPage({nowPage, limit}).then(data => {
        commit('setList', data.data.result);
        commit("setTotalPage", data.data.count);
      })
    },
    updateStu({ commit, state }, options) {
      return axios.updateStu(options).then(data => {
        if (data.statusText === "OK") {
          commit("setShowModal", false);
          Object.assign(state.editStu, options);
          return Promise.resolve({
            type: "success",
            msg: data.data.msg,
            duration: 2000
          });
        } else {
          return Promise.resolve({
            type: "fail",
            msg: data.data.msg,
            duration: 2000
          });
        }
      });
    },
    turnPage({ dispatch, commit, state }, n) {
      commit("setNowPage", n);
      if (state.searchValue) {
        dispatch('search', {
          searchValue: state.searchValue,
          nowPage: state.nowPage,
          limit: state.limit
        })
      } else {
        dispatch("getStuList");
      }
    },
    searchStu({ dispatch, commit, state }) {
      commit("setNowPage", 1);
      if (state.searchValue) {
        dispatch("search", {
          searchValue: state.searchValue,
          nowPage: state.nowPage,
          limit: state.limit
        });
      } else {
        dispatch("getStuList");
      }
    },
    search({ commit }, options) {
      axios.searchStu(options).then(data => {
        commit("setList", data.data.result);
        commit("setTotalPage", data.data.count);
      });
    },
    detStu({ dispatch, state }, sNo) {
      axios.delStu(sNo).then(_ => {
        if (state.totalPage === Math.ceil((state.count - 1) / state.limit)) {
          dispatch('turnPage', state.nowPage)
        } else {
          dispatch('turnPage', -1);
        }
      })
    }
  },
  modules: {
  }
})
