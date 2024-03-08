import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
import Search from "../views/pages/Search.vue";
import ListItems from "../views/pages/List_Items.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/", component: Search },
  { path: "/list-items", component: ListItems },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
