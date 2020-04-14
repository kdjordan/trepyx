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
        sendMail(e) {
            let templateParams = {
                "from_name": this.name,
                "reply_to": this.email,
                "message_html": this.mssg
            } 
            console.log(e.target.reset())
            emailjs.send('smtp_server', 'template_Noy0SjKH_clone', templateParams, process.env.VUE_APP_EMAIL_ID)
                .then((result) => {
                    if(result.status == 200) {
                        this.doResponse = true;
                        this.responseStatus = true;
                        this.response = 'Success. We will be in touch shortly';
                        e.target.reset()
                        setTimeout(() => {
                            this.closeModal();
                        }, 2000)
                    }
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    this.doResponse = true;
                    this.responseStatus = false;
                    this.response = 'Something went wrong. You can email us directly : steve@trepyx.com';
                    e.target.reset();
                    console.log('FAILED...', error);
                });
        },
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