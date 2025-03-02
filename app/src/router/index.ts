import { createRouter, createWebHistory } from 'vue-router'
import FooView from "@/views/FooView.vue";
import BarView from "@/views/BarView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/app",
      children: [
        {
          path: "foo",
          name: "foo",
          component : FooView
        },
        {
          path: "bar",
          name: "bar",
          component : BarView
        }
      ]
    },

  ],
})

export default router
