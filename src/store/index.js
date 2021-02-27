import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabFlag: 1,
    showSearch: false,
    showFilter: false,
    showSidebar: false,
  },
  mutations: {
    SET_TAB: (state, payload) => state.tabFlag = payload,
    SET_SIDEBAR: (state, payload) => state.showSidebar = payload,
    SET_SEARCH: (state, payload) => state.showSearch = payload,
    SET_FILTER: (state, payload) => state.showFilter = payload,
  },
  actions: {
  },
  getters: {
    getTab: (state) => state.tabFlag,
    getNavbarSearch: (state) => state.showSearch,
    getNavbarFilter: (state) => state.showFilter,
    getSidebar: (state) => state.showSidebar,
  },
  modules: {
  }
})
