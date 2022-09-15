import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            lists: [
                { id: 1, subject: 'Your 7 figure plan goes at midnight', body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', read: false, archiev: false },
                { id: 2, subject: 'Hey Your assignment is due', body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', read: true, archiev: false },
                { id: 3, subject: 'You have won the lottery', body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', read: false, archiev: true },
                { id: 4, subject: 'SIP PAYMENT REMINDER', body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', read: false, archiev: false },
                { id: 5, subject: 'Exam has been cancelled', body: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', read: true, archiev: true }

            ]
        }
    },
    mutations: {
        toggleReadStatus(state, mailId) {
            console.log(mailId)
            if (mailId.length) {
                mailId.forEach(id => {
                    let mail = state.lists.find(i => i.id == id)
                    mail.read = true
                });
            }
        },
        toggleArchievStatus(state, mailId) {
            console.log(mailId)
            if (mailId.length) {
                mailId.forEach(id => {
                    let mail = state.lists.find(i => i.id == id)
                    mail.archiev = true
                });
            }
        }
    },
})

export default store