import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        accountLabel: '',
        dateLabel: ''
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setAccount(state, id) {
            state.accountLabel = id;
        },
        setDate(state, date) {
            state.dateLabel = date;
        }
    }
})

export default store;