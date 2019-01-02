import Vue from "vue";
import App from "./App.vue";
import api from "./api/api.js";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible";
import "@/assets/css/style.css";
import "@/assets/css/swiper-4.3.5.min.css";
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");