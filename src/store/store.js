import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        modalState: false

    },
    mutations: {
        toggleModal(state) {
            state.modalState = !state.modalState
        }

    },
    getters: {
        getModalState(state) {
            return state.modalState
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
    }



})