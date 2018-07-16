import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueCodemirror from "vue-codemirror";
import "codemirror/lib/codemirror.css";
Vue.use(ElementUi);
Vue.use(VueCodemirror);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
