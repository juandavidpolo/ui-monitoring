export const getViews = (callback) => {
  const context = require.context("src/views", true, /index\.js$/);
  const routes = [];

  context.keys().forEach((file) => {
    const routePath = file
      .replace("./", "")
      .replace("/index.js", "")
      .toLowerCase();
    const module = context(file);

    const routeData = callback(routePath, module);
    if (routeData) routes.push(routeData);
  });

  return routes;
};