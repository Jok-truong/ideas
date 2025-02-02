import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export default router;
