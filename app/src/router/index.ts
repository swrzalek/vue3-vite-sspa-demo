import { createRouter, createWebHistory } from 'vue-router'
import FooView from "@/views/FooView.vue";
import BarView from "@/views/BarView.vue";

const router = (basePath = '/app') => createRouter({
  history: createWebHistory(basePath),
  routes: [
        {
          path: "/foo",
          name: "foo",
          component : FooView,
        },
        {
          path: "/bar",
          name: "bar",
          component : BarView
        }
  ],
})

export default router
