import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rowIndex: 0,
    rowCount: 0,
    count: 0,
    accountLabel: '',
    dateLabel: '',
    width: 0,
    height: 0,
    isMobile: false
  },
  mutations: {
    setRowIndex(state, index) {
      state.rowIndex = index;
      console.log("set row index=" + index);
    },
    setRowCount(state, index) {
      state.rowCount = index;
      console.log("set row count=" + index);
    },
    increment(state) {
      state.count++
    },
    setAccount(state, id) {
      state.accountLabel = id;
    },
    setDate(state, date) {
      state.dateLabel = date;
    },
    setWindowSize(state, size) {
      state.width = size[0];
      state.height = size[1];
      if (state.width < 1024)
        state.isMobile = true;
      else
        state.isMobile = false;
    }
  }
})

export default store;
