import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../modules/home/views/Home";

const NavContentLayout = () =>
  import("../modules/common/components/NavContentLayout");

import About from "../modules/about/views/About";
const ActivityNav = () => import("../modules/activity/components/AvtivityNav");
const ActivityNew = () => import("../modules/activity/views/ActivityNew");
const ActivityPass = () => import("../modules/activity/views/ActivityPass");
const ActivityTheme = () => import("../modules/activity/views/ActivityTheme");
const ActivitySeries = () => import("../modules/activity/views/ActivitySeries");

import Angel from "../modules/angel/views/Angel";
import Center from "../modules/center/views/Center";
import Growing from "../modules/growing/views/Growing";
import Information from "../modules/info/views/Information";

const NewsNav = () => import("../modules/news/components/NewsNav");
const NewsAnnouncement = () => import("../modules/news/views/NewsAnnouncement");
const NewsActivity = () => import("../modules/news/views/NewsActivity");
const NewsOther = () => import("../modules/news/views/NewsOther");

import Power from "../modules/power/views/Power";
import Videos from "../modules/videos/views/Videos";

Vue.use(VueRouter);

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
    redirect: "/activity/new",
    component: NavContentLayout,
    children: [
      {
        path: "new",
        components: {
          side: ActivityNav,
          content: ActivityNew
        }
      },
      {
        path: "pass",
        components: {
          side: ActivityNav,
          content: ActivityPass
        }
      },
      {
        path: "theme",
        components: {
          side: ActivityNav,
          content: ActivityTheme
        }
      },
      {
        path: "series",
        components: {
          side: ActivityNav,
          content: ActivitySeries
        }
      }
    ]
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
    redirect: "/news/announcement",
    component: NavContentLayout,
    children: [
      {
        path: "announcement",
        components: {
          side: NewsNav,
          content: NewsAnnouncement
        }
      },
      {
        path: "activity",
        components: {
          side: NewsNav,
          content: NewsActivity
        }
      },
      {
        path: "other",
        components: {
          side: NewsNav,
          content: NewsOther
        }
      }
    ]
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
