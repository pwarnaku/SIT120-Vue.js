import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Staff from '@/components/jobs/Staff'
import NewJob from '@/components/jobs/NewJob'
import Profile from '@/components/user/Profile'
import Signup from '@/components/user/Signup'
import Signin from '@/components/user/Signin'
import StaffProf from '@/components/jobs/StaffProf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jobs',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/jobs/newjob',
      name: 'NewJob',
      component: NewJob
    },
    {
      path: '/staff/:id',
      name: 'StaffProf',
      component: StaffProf
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
