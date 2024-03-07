import { createRouter, createWebHistory } from "vue-router";

import Search from "../views/pages/Search.vue";
const routes = [{ path: "/", component: Search }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
