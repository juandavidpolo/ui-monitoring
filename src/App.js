import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "src/components/layout";

const renderViews = () => {
  const context = require.context("./views", true, /index\.js$/);
  const routes = [];

  context.keys().forEach((file) => {
    const module = context(file);
    const Component = module.default;

    const routePath = file
      .replace("./", "")
      .replace("/index.js", "")
      .toLowerCase();

    routes.push(
      <Route key={routePath} path={`/${routePath}`} element={<Component />} />
    );
  });

  return routes;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {renderViews()}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
