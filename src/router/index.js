import { createRouter, createWebHistory } from "vue-router";
import DataScienceView from "@/views/DataScienceView.vue";
import HomeView from "@/views/HomeView.vue";
import MobileAppDevelopmentView from "@/views/MobileAppDevelopmentView.vue";
import WebDevelopmentView from "@/views/WebDevelopmentView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ContactUsView from "@/views/ContactUsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/data-science",
      name: "data-science",
      component: DataScienceView,
    },
    {
      path: "/mobile-apps",
      name: "/mobile-apps",
      component: MobileAppDevelopmentView,
    },
    {
      path: "/web-apps",
      name: "web-apps",
      component: WebDevelopmentView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUsView,
    }
  ],
});

export default router;
