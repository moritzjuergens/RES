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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/get-started",
  //   name: "GetStarted",
  //   component: () =>
  //     import("../views/GetStarted.vue"),
  // },
  {
    path: '/ping',
    name: 'Ping',
    component: () =>
      import("../components/Ping.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import("../components/Books.vue"),
  },
  // {
  //   path: "/jobs",
  //   name: "Jobs",
  //   component: () =>
  //     import("../views/Jobs.vue"),
  // },
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
