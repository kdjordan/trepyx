import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        modalState: false,
        modalType: '',
        mssgs: [
            'Flexible Telecom Solutions',
            'We Grow With You',
            'The Remote Office is Today\’s Reality',
            'Put Your Office In Your Cell Phone',
            'Say Goodbye to Carrying Two Phones',
            'Unified Messaging',
            'Solutions For You and Your Business'
        ],
        mssgIndex: 0,
        hidden: false,
        heroInterval: null

    },
    mutations: {
        toggleModal(state, payload) {
            state.modalState = !state.modalState
            state.modalType = payload
        },
        setHeroInterval(state, payload) {
            state.heroInterval = payload
        },
        bumpMssgIndex(state) {
            if(state.mssgIndex == state.mssgs.length - 1) {
                state.mssgIndex = 0
            } else {
                state.mssgIndex++
            }
        },
        toggleHidden(state) {
            state.hidden = !state.hidden
        }

    },
    getters: {
        getModalState(state) {
            return state.modalState
        },
        getModalType(state) {
            return state.modalType
        },
        getMssg(state) {
            return state.mssgs[state.mssgIndex]
        },
        getHidden(state) {
            return state.hidden
        }
    },
    actions: {
        startHeroInterval({ commit }) {
            console.log('called')
            let theInterval = setInterval(() => {
                commit('toggleHidden')
                setTimeout(() => {
                    commit('bumpMssgIndex')
                    commit('toggleHidden')
                }, 1000)
            }, 4000)
            commit('setHeroInterval', theInterval)
        }
    }



})