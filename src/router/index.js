import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: () => import('../components/Meetup/Meetups.vue')
  },
  {
    path: '/meetup/new',
    name: 'CreateMeetup',
    component: () => import('../components/Meetup/CreateMeetup.vue')
  },
  {
    path: '/meetups/:id',
    name: 'Meetup',
    props: true,
    component: () => import('../components/Meetup/Meetup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/User/Profile.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/User/Signup.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../components/User/Signin.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
