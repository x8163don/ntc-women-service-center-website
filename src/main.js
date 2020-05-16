import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "swiper/css/swiper.min.css";
import "swiper/js/swiper.min.js";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
