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
                date: "2020-07-17"
            },
            {
                imageUrl:
                    "https://images.law.com/contrib/content/uploads/sites/401/2020/04/Austin-Texas-Article-202004241528.jpg",
                id: "egwcvyweuycuy",
                title: "Meetup in TX",
                date: "2020-07-17"
            }
        ],
        user: {
            id: "rbebcsfbvyeer",
            registeredMeetups: ["chbfvubedhs"]
        }
    },
    mutations: {},
    actions: {},
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