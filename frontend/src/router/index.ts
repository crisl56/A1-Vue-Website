import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import LeaderBoardPage from "../views/LeaderboardPage.vue";
import ContactsPage from "../views/ContactsPage.vue";
import LoginPage from "../views/LoginPage.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", name: "Landing", component: LandingPage },
    { path: "/About", name: "About", component: AboutPage},
    { path: "/Leaderboard", name: "Leaderboard", component: LeaderBoardPage},
    { path: "/Contacts", name: "Contacts", component: ContactsPage },
    { path: "/Login", name: "Login", component: LoginPage}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

// Point of the router 
// The way to navigate through different files
