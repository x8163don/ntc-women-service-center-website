import Vue from "vue";
import VueRouter from "vue-router";

const NavContentLayout = () =>
  import("../modules/common/components/NavContentLayout");

const Home = () => import("../modules/home/views/Home");

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

const AngelNav = () => import("../modules/angel/components/AngelNav");
const AngelIntroduce = () => import("../modules/angel/views/AngelIntroduce");
const AngelPrize = () => import("../modules/angel/views/AngelPrize");
const AngelRecruit = () => import("../modules/angel/views/AngelRecruit");

const GrowingNav = () => import("../modules/growing/components/GrowingNav");
const GrowingCollection = () =>
  import("../modules/growing/views/GrowingCollections");

const NewsNav = () => import("../modules/news/components/NewsNav");
const NewsAnnouncement = () => import("../modules/news/views/NewsAnnouncement");
const NewsActivity = () => import("../modules/news/views/NewsActivity");
const NewsOther = () => import("../modules/news/views/NewsOther");

const PowerNav = () => import("../modules/power/components/PowerNav");
const PowerActivity = () => import("../modules/power/views/PowerActivity");
const PowerIssue = () => import("../modules/power/views/PowerIssue");
const PowerVideos = () => import("../modules/power/views/PowerVideos");
const PowerFiles = () => import("../modules/power/views/PowerFiles");

const Videos = () => import("../modules/videos/views/Videos");

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
    redirect: "/angel/introduce",
    component: NavContentLayout,
    children: [
      {
        path: "introduce",
        components: {
          side: AngelNav,
          content: AngelIntroduce
        }
      },
      {
        path: "recruit",
        components: {
          side: AngelNav,
          content: AngelRecruit
        }
      },
      {
        path: "prize",
        components: {
          side: AngelNav,
          content: AngelPrize
        }
      }
    ]
  },
  {
    path: "/growing",
    redirect: "/growing/collection",
    component: NavContentLayout,
    children: [
      {
        path: "collection",
        components: {
          side: GrowingNav,
          content: GrowingCollection
        }
      },
      {
        path: "cedaw",
        components: {
          side: GrowingNav,
          content: ""
        }
      }
    ]
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
