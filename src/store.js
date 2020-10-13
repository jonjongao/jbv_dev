import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        accountLabel: '',
        dateLabel: '',
        width: 0,
        height: 0,
        isMobile: false
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