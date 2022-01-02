import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: ""
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      breadcrumb: "About"
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
    meta: {
      breadcrumb: "Blog"
    }
  },
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "work" */ '../views/Work.vue'),
    meta: {
      breadcrumb: "Work"
    }
  }
]

const router = new VueRouter({
  routes: routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    // console.log(from, savedPosition, to.hash)
    if (to.hash) {
      return {
        selector: to.hash
      }  
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },  

})

export default router
