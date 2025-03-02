import App from './App.vue'
import './assets/main.css'
import singleSpaVue from 'single-spa-vue'
import {createApp, h} from "vue";
import router from './router'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          name: this.name,
        },
      });
    },
  },
  handleInstance: (app) => {
    app.use(router);
  }
});

const mountVue = () => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}

if (import.meta.env.MODE === 'development') {
  mountVue();
}

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
