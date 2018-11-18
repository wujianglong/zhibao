import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/Search.vue")
    },
    {
      path: "/my",
      name: "my",
      component: () => import("./views/My.vue")
    },
    {
      path: "/bind",
      name: "bind",
      component: () => import("./views/Bind.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("./views/Detail.vue")
    },
    {
      path: "/sign",
      name: "sign",
      component: () => import("./views/Sign.vue")
    },
    {
      path: "/wallet",
      name: "wallet",
      component: () => import("./views/Wallet.vue")
    }
  ]
});
