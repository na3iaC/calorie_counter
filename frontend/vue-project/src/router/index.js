import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
import Search from "../views/pages/Search.vue";
import ItemDetails from "../views/pages/ItemDetails.vue";
import List from "../views/pages/List.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/", component: Search },
  { path: "/food/:foodId", component: ItemDetails },
  { path: "/list", component: List}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
