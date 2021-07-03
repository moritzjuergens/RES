import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import( "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
  },
  {
    path:"/get-started",
    name:"GetStarted",
    component: ()=> import("@/views/GetStarted.vue"),
  },
  {
    path:"/jobs/:jobtitle/:location",
        name:"Jobs",
        component: ()=> import("@/views/Jobs.vue"),
        props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
