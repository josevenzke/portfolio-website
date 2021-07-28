import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";


const routes = [
  {
    path: "/",
    name: "sobres",
    component: App,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: App,
  },
  {
    path: "/projetos",
    name: "projetos",
    component: App,
  },
  {
    path: "/contato",
    name: "contato",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;