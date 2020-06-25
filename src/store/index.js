import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

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
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        setError(state, payload) {
            state.error = payload;
        },
        clearError(state) {
            state.error = null;
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
        },
        signUserUp({ commit }, payload) {
            commit('setLoading', true);
            commit('clearError');
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false);
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        };
                        commit('setUser', newUser);
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false);
                        commit('setError', error);
                        console.error(error);
                    }
                )
        },
        signUserIn({ commit }, payload) {
            commit('setLoading', true);
            commit('clearError');
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false);
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        };
                        commit('setUser', newUser);
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false);
                        commit('setError', error);
                        console.error(error);
                    }
                )
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
        },
        user(state) {
            return state.user;
        },
        loading(state) {
            return state.loading;
        },
        error(state) {
            return state.error;
        }
    }
})