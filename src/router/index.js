import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Bpm",
    component: () => import("@/views/bpm.vue"),
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.BASE_URL,
  routes
})

export default router
