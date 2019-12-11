import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/pages/Home"); // 首页
const About = () => import("@/pages/About"); // 首页

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
