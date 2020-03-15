import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../modules/home/views/Home";

const NavContentLayout = () =>
  import("../modules/common/components/NavContentLayout");

const AboutNav = () => import("../modules/about/components/AboutNav");
const AboutIntroduce = () => import("../modules/about/views/AboutIntroduce");
const AboutSpace = () => import("../modules/about/views/AboutSpace");
const AboutMap = () => import("../modules/about/views/AboutMap");
const AboutVisit = () => import("../modules/about/views/AboutVisit");
const AboutBooking = () => import("../modules/about/views/AboutBooking");

const ActivityNav = () => import("../modules/activity/components/AvtivityNav");
const ActivityNew = () => import("../modules/activity/views/ActivityNew");
const ActivityPass = () => import("../modules/activity/views/ActivityPass");
const ActivityTheme = () => import("../modules/activity/views/ActivityTheme");
const ActivitySeries = () => import("../modules/activity/views/ActivitySeries");

import Angel from "../modules/angel/views/Angel";
import Growing from "../modules/growing/views/Growing";

const NewsNav = () => import("../modules/news/components/NewsNav");
const NewsAnnouncement = () => import("../modules/news/views/NewsAnnouncement");
const NewsActivity = () => import("../modules/news/views/NewsActivity");
const NewsOther = () => import("../modules/news/views/NewsOther");

const PowerNav = () => import("../modules/power/components/PowerNav");
const PowerActivity = () => import("../modules/power/views/PowerActivity");
const PowerIssue = () => import("../modules/power/views/PowerIssue");
const PowerVideos = () => import("../modules/power/views/PowerVideos");
const PowerFiles = () => import("../modules/power/views/PowerFiles");

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
    redirect: "/about/introduce",
    component: NavContentLayout,
    children: [
      {
        path: "introduce",
        components: {
          side: AboutNav,
          content: AboutIntroduce
        }
      },
      {
        path: "space",
        components: {
          side: AboutNav,
          content: AboutSpace
        }
      },
      {
        path: "map",
        components: {
          side: AboutNav,
          content: AboutMap
        }
      },
      {
        path: "visit",
        components: {
          side: AboutNav,
          content: AboutVisit
        }
      },
      {
        path: "booking",
        components: {
          side: AboutNav,
          content: AboutBooking
        }
      }
    ]
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
    path: "/growing",
    name: "Growing",
    component: Growing
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
    redirect: "/power/activity",
    component: NavContentLayout,
    children: [
      {
        path: "activity",
        components: {
          side: PowerNav,
          content: PowerActivity
        }
      },
      {
        path: "issue",
        components: {
          side: PowerNav,
          content: PowerIssue
        }
      },
      {
        path: "videos",
        components: {
          side: PowerNav,
          content: PowerVideos
        }
      },
      {
        path: "files",
        components: {
          side: PowerNav,
          content: PowerFiles
        }
      }
    ]
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
