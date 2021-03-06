import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home/Home.vue";
import Settings from "@/components/Settings/Settings.vue"

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/settings", component: Settings },
];

export default new Router({
  routes,
  mode: "history"
})
