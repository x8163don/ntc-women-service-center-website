import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../modules/home/views/Home"
import About from "../modules/about/views/About"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
