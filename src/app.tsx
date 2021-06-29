import "./app.less"

export function patchRoutes({ routes }) {
  routes[2].routes.push({
    path: '*',
    component: require('./pages/404').default,
  });
}
