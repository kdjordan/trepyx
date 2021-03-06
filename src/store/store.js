import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        response: {
            doResponse: false,
            responseStatus: false,
            response: ''
        },
        planSelected: null,
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
        makeResponse(state, payload) {
            state.response.doResponse = payload.doResponse
            state.response.responseStatus = payload.responseStatus
            state.response.response = payload.response
        },
        resetResponse(state) {
            state.response.doResponse = false
            state.response.responseStatus = false
            state.response.response = ''
        },
        selectPlan(state,  payload) {
            state.planSelected = payload
        },
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
        getResponseMssg(state){
            return state.response.response
        },
        getResponseStatus(state){
            return state.response.responseStatus
        },
        getDoResponse(state){
            return state.response.doResponse
        },
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