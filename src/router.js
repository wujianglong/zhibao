import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/zb/",
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import ( /* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import ( /* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () =>
        import ("./views/Search.vue")
    },
    {
      path: "/my",
      name: "my",
      component: () =>
        import ("./views/My.vue")
    },
    {
      path: "/bind",
      name: "bind",
      component: () =>
        import ("./views/Bind.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () =>
        import ("./views/Detail.vue")
    },
    {
      path: "/sign",
      name: "sign",
      component: () =>
        import ("./views/Sign.vue")
    },
    {
      path: "/wallet",
      name: "wallet",
      component: () =>
        import ("./views/Wallet.vue")
    },
    {
      path: "/auth",
      name: "auth",
      component: () =>
        import ("./views/Auth.vue")
    },
    {
      path: "/city",
      name: "city",
      component: () =>
        import ("./views/City.vue")
    },
    {
      path: "/collect",
      name: "collect",
      component: () =>
        import ("./views/Collect.vue")
    },
    {
      path: "/map",
      name: "map",
      component: () =>
        import ("./views/Map.vue")
    },
    {
      path: "/withdraw",
      name: "withdraw",
      component: () =>
        import ("./views/Withdraw.vue")
    },
    {
      path: "/salary",
      name: "salary",
      component: () =>
        import ("./views/Salary.vue")
    }
  ]
});