import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

Vue.component('app-alert', AlertCmp);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCmjHKl9MmF5gpAGcF_wn3cha7_38-P7T0',
      authDomain: 'devmeetup-85821.firebaseapp.com',
      databaseURL: 'https://devmeetup-85821.firebaseio.com',
      projectId: 'devmeetup-85821',
      storageBucket: 'devmeetup-85821.appspot.com',
      messagingSenderId: '3821973590',
      appId: '1:3821973590:web:10154abdb982c412e00bf7'
    })
    this.$store.dispatch('loadMeetups');
  }
}).$mount('#app')
