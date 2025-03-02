import App from './App.vue'
import './assets/main.css'
import singleSpaVue from 'single-spa-vue'
import {createApp, h} from "vue";
import router from './router'

type Props = {
  name: string,
  basePath: string,
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      const { name, basePath } = this as unknown as Props;
      return h(App, {
        name: name,
        basePath: basePath,
      });
    },
  },
  handleInstance: (app, props: Props) => {
    app.use(router(props.basePath));
  }
});

const mountVue = () => {
  const app = createApp(App)
  app.use(router())
  app.mount('#app')
}

if (import.meta.env.MODE === 'development') {
  mountVue();
}

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
