import Vue from 'vue'
import Router from 'vue-router'

// Component
const userList = () => import('@/components/userList')
const singleBlog = () => import('@/components/singleBlog')
const userTitle = () => import('@/components/userTitle')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'userList',
      component: userList
    },
    {
      path: '/user/:id',
      component: userTitle
    }
  ]
})
