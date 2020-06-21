import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl:
                    "https://lp-cms-production.imgix.net/2019-06/GettyImages-538096543_medium.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
                id: "chbfvubedhs",
                title: "Meetup in NY",
                date: new Date(),
                location: "NY",
                description: "description 1"
            },
            {
                imageUrl:
                    "https://images.law.com/contrib/content/uploads/sites/401/2020/04/Austin-Texas-Article-202004241528.jpg",
                id: "egwcvyweuycuy",
                title: "Meetup in TX",
                date: new Date(),
                location: "Houston",
                description: "description 2"
            }
        ],
        user: {
            id: "rbebcsfbvyeer",
            registeredMeetups: ["chbfvubedhs"]
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: 'ecbueiryberw'
            };
            // Reach out to firebase and store it
            commit('createMeetup', meetup);
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => meetupA.date > meetupB.date);
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5);
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId;
                })
            }
        }
    }
})