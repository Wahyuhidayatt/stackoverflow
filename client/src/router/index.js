import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import question from '@/components/question'
import Answer from '@/components/Answer'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/questions',
      component: question
    },{
      path: '/answer/:id',
      component:Answer
    },{
      path: '/home',
      component: Home
    },{
      path: '/login',
      component : Login
    }
  ]
})
