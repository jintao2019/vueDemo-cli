import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@assets/css/reset.css";

import { Button } from "element-ui";

// localstorage 的二次封装
import storage from "storejs";

Vue.use(Button);

Vue.prototype.$storage = storage;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
