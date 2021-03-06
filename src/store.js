import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isFreeze: false,
    account: "",
    password: "",
    rowIndex: 0,
    rowCount: 0,
    count: 0,
    accountLabel: "",
    dateLabel: "",
    width: 0,
    height: 0,
    isMobile: false,
    listFavorite: {},
    guestMails: [],
    ziqiMails: [],
    forumPosts: {},
    secretMails: [],

    forumHeader: {}, // ! 各討論區標頭文案
    truthForumList: [], // ! Truth版(預設)討論區清單
    tsueihuaForumList: [], // ! 翠華板討論區清單
    eilGuestVerForumList: [], // ! 艾爾板訪客視點清單
    eilZiqiVerForumList: [], // ! 艾爾板子琪視點清單

    isUnlockedSecret: false,

    mobileHeaderHeight: 0
  },
  mutations: {
    setFreeze(state, val) {
      this.state.isFreeze = val;
    },
    setSecret(state, val) {
      if (val == this.state.isUnlockedSecret) return;
      if (val) {
        this.state.isUnlockedSecret = val;
        for (var i = 0; i < this.state.secretMails.length; i++) {
          this.state.ziqiMails.push(this.state.secretMails[i]);
        }
        // console.log("add secret mail to ziqi's mail list");
      } else {
      }
    },
    setUser(state, data) {
      // console.log("set user=" + data[0] + "/" + data[1]);
      state.account = data[0];
      state.password = data[1];
    },
    setDBs(state, dbs) {
      state.listFavorite = dbs[0];
      state.guestMails = dbs[1];
      state.ziqiMails = dbs[2];
      state.secretMails = dbs[3];
      state.forumPosts = dbs[4];
    },
    setForumDBs(state, dbs) {
      state.forumHeader = dbs[0];
      state.truthForumList = dbs[1];
      state.tsueihuaForumList = dbs[2];
      state.eilGuestVerForumList = dbs[3];
      state.eilZiqiVerForumList = dbs[4];
    },
    setRowIndex(state, index) {
      state.rowIndex = index;
      // console.log("set row index=" + index);
    },
    setRowCount(state, index) {
      state.rowCount = index;
      // console.log("set row count=" + index);
    },
    increment(state) {
      state.count++;
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
      state.isMobile = size[2];
    },
    setMobileHeaderHeight(state,val){
      state.mobileHeaderHeight = val;
      // console.log("submit height="+val);
    }
  }
});

export default store;
