import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
// import EditBlog from '@/components/EditBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBlog
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    },
    // {
    //   path: '/edit/:id',
    //   name: 'EditBlog',
    //   component: EditBlog
    // }
  ]
})
