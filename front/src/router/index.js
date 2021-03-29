import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Register from "../views/Register.vue";
import BasicLayout from "../layouts/BasicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../views/Dashboard";
import Reviews from "../views/Reviews";
import Watchlist from "../views/Watchlist";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {layout: BasicLayout}
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
    meta: {layout: BasicLayout}
  },
  {
    path: "/auth/register",
    name: "Register",
    component: Register,
    meta: {layout: BasicLayout}
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {layout: DashboardLayout}
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
    meta: {layout: DashboardLayout}
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    component: Watchlist,
    meta: {layout: DashboardLayout}
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
