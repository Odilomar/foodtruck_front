import { createRouter, createWebHistory } from "vue-router";
import UserControllerView from "@/views/user/UserControllerView.vue";
import ProductControllerView from "@/views/product/ProductControllerView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeview",
      component: HomeView,
    },
    {
      path: "/products",
      name: "productcontrollerview",
      component: ProductControllerView,
    },
    {
      path: "/users",
      name: "usercontrollerview",
      component: UserControllerView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
