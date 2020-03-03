import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../modules/home/views/Home"
import About from "../modules/about/views/About"
import Activity from "../modules/activity/views/Activity"
import Angel from "../modules/angel/views/Angel"
import Center from "../modules/center/views/Center"
import Growing from "../modules/growing/views/Growing"
import Information from "../modules/info/views/Information"
import News from "../modules/news/views/News"
import Power from "../modules/power/views/Power"
import Videos from "../modules/videos/views/Videos"

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
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity
  },
  {
    path: "/angel",
    name: "Angel",
    component: Angel
  },
  {
    path: "/center",
    name: "Center",
    component: Center
  },
  {
    path: "/growing",
    name: "Growing",
    component: Growing
  },
  {
    path: "/information",
    name: "Information",
    component: Information
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/power",
    name: "Power",
    component: Power
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
