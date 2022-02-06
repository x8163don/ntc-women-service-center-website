import Vue from "vue";
import VueRouter from "vue-router";

const PostDetail = () => import("../modules/common/components/PostDetail");

// v2
const Home = () => import("../modules/home/views/Home");
const Introduce = () => import("../modules/about/views/Introduce");
const Booking = () => import("../modules/about/views/Booking");
const Traffic = () => import("../modules/about/views/Traffic");
const ExhibitionsV2 = () => import("../modules/activity/views/Exhibition");
const Activities = () => import("../modules/activity/views/Activities");
const Volunteer = () => import("../modules/volunteer/views/Volunteer");
const GenderEquality = () => import("../modules/gender/views/GenderEquality");
const WomanPower = () => import("../modules/power/views/WomanPower");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "",
    name: "Home_v2",
    component: Home
  },
  {
    path: "/about/introduce",
    name: "Introduce",
    component: Introduce
  },
  {
    path: "/about/booking",
    name: "Booking",
    component: Booking
  },
  {
    path: "/about/traffic",
    name: "Traffic",
    component: Traffic
  },
  {
    path: "/activity/exhibition",
    name: "Exhibitions",
    component: ExhibitionsV2
  },
  {
    path: "/activity",
    name: "Activities",
    component: Activities
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: Volunteer
  },
  {
    path: "/gender",
    name: "GenderEquality",
    component: GenderEquality
  },
  {
    path: "/power",
    name: "WomanPower",
    component: WomanPower
  },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail
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
