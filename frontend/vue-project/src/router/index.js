import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
import Search from "../views/pages/Search.vue";
import ItemDetails from "../views/pages/ItemDetails.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/", component: Search },
  { path: "/food/:foodId", component: ItemDetails },
  { path: "/ItemDetails", component: ItemDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
