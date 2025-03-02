import { registerApplication, start } from "single-spa"

export const apps = {
  app : "@howlydev/app"
}

export function registerSpas() {
  for (const [route, moduleName] of Object.entries(apps)) {
    registerApplication({
      name: route,
      app: () => import(/* @vite-ignore */ moduleName),
      activeWhen: `/${route}`,
      customProps: {
        basePath: `/${route}`
      }
    });
  }

  runSpas();
}

export function runSpas() {
  start();
}
