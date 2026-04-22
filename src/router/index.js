import { createRouter, createWebHashHistory } from "vue-router"; // Changed this line
import HomeView from "../views/HomeView.vue";
import WatchlistView from "../views/WatchlistView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/watchlist", component: WatchlistView },
  ],
});

export default router;
