import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isFreeze: false,
    account: '',
    password: '',
    rowIndex: 0,
    rowCount: 0,
    count: 0,
    accountLabel: '',
    dateLabel: '',
    width: 0,
    height: 0,
    isMobile: false,
    listFavorite: {},
    guestMails: {},
    ziqiMails: {},
    forumPosts: {}
  },
  mutations: {
    setFreeze(state,val){
      this.state.isFreeze = val;
    },
    setUser(state, data){
      console.log("set user="+data[0]+"/"+data[1]);
      state.account = data[0];
      state.password= data[1];
    },
    setDBs(state,dbs){
      state.listFavorite=dbs[0];
      state.guestMails=dbs[1];
      state.ziqiMails=dbs[2];
      state.forumPosts=dbs[3];
    },
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
