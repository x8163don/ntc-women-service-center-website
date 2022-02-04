import Vue from "vue";
import VueRouter from "vue-router";

// import Common Components
const NavContentLayout = () =>
  import("../modules/common/components/NavContentLayout");
const DataPreview = () =>
  import("../modules/common/components/DataPreview.vue");
const PostDetail = () => import("../modules/common/components/PostDetail");

const Home = () => import("../modules/home/views/Home");

const AboutNav = () => import("../modules/about/components/AboutNav");
const AboutIntroduce = () => import("../modules/about/views/AboutIntroduce");
const AboutSpace = () => import("../modules/about/views/AboutSpace");
const AboutMap = () => import("../modules/about/views/AboutMap");
const AboutVisit = () => import("../modules/about/views/AboutVisit");
const AboutBooking = () => import("../modules/about/views/AboutBooking");
const AboutNews = () => import("../modules/about/views/AboutNews");

const ActivityNav = () => import("../modules/activity/components/AvtivityNav");
const ActivityNew = () => import("../modules/activity/views/ActivityNew");
const ActivityPass = () => import("../modules/activity/views/ActivityPass");
const ActivityTheme = () => import("../modules/activity/views/ActivityTheme");
const ActivitySeries = () => import("../modules/activity/views/ActivitySeries");

const AngelNav = () => import("../modules/angel/components/AngelNav");
const AngelIntroduce = () => import("../modules/angel/views/AngelIntroduce");
const AngelPrize = () => import("../modules/angel/views/AngelPrize");
const AngelRecruit = () => import("../modules/angel/views/AngelRecruit");
const AngelActivity = () => import("../modules/angel/views/AngelActivity");

const GrowingNav = () => import("../modules/growing/components/GrowingNav");
const GrowingCollection = () =>
  import("../modules/growing/views/GrowingCollections");
const GrowingCedaw = () => import("../modules/growing/views/GrowingCedaw");

const NewsNav = () => import("../modules/news/components/NewsNav");
const NewsAnnouncement = () => import("../modules/news/views/NewsAnnouncement");
const NewsActivity = () => import("../modules/news/views/NewsActivity");
const NewsOther = () => import("../modules/news/views/NewsOther");

const PowerNav = () => import("../modules/power/components/PowerNav");
const PowerStudy = () => import("../modules/power/views/PowerStudy");
const PowerIssue = () => import("../modules/power/views/PowerIssue");
const PowerVideos = () => import("../modules/power/views/PowerVideos");
const PowerFiles = () => import("../modules/power/views/PowerFiles");

const Videos = () => import("../modules/videos/views/Videos");

const Trips = () => import("../modules/trips/views/Trips");

const Exhibitions = () => import("../modules/exhibition/views/Exhibition.vue");
const ExhibitionsInfo = () =>
  import("../modules/exhibition/views/ExhibitionInfo.vue");

// v2
const HomeV2 = () => import("../modules/home/views/Home_v2");
const Introduce = () => import("../modules/about/views/Introduce");
const Booking = () => import("../modules/about/views/Booking");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/v2",
    name: "Home_v2",
    component: HomeV2
  },
  {
    path: "/v2/about/introduce",
    name: "Introduce",
    component: Introduce
  },
  {
    path: "/v2/about/booking",
    name: "Booking",
    component: Booking
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
      },
      {
        path: "news",
        components: {
          side: AboutNav,
          content: AboutNews
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
      },
      {
        path: "post/:id",
        components: {
          side: ActivityNav,
          content: PostDetail
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
      },
      {
        path: "activity",
        components: {
          side: AngelNav,
          content: AngelActivity
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
          content: GrowingCedaw
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
      },
      {
        path: "post/:id",
        components: {
          side: NewsNav,
          content: PostDetail
        }
      }
    ]
  },
  {
    path: "/power",
    redirect: "/power/study",
    component: NavContentLayout,
    children: [
      {
        path: "study",
        components: {
          side: PowerNav,
          content: PowerStudy
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
      },
      {
        path: "post/:id",
        components: {
          side: PowerNav,
          content: DataPreview
        }
      }
    ]
  },
  {
    path: "/videos",
    name: "Videos",
    component: Videos
  },

  {
    path: "/exhibitions",
    name: "Exhibitions",
    component: Exhibitions
  },

  {
    path: "/exhibition/:id",
    name: "Exhibition",
    component: ExhibitionsInfo
  },
  {
    path: "/trips",
    name: "Trips",
    component: Trips
  },
  {
    path: "*",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
