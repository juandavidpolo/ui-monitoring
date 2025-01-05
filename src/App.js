import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { getViews } from 'src/utils/routes';
import Layout from "src/components/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {getViews((routePath, module) => {
            const Component = module.default;
            return <Route key={routePath} path={`/${routePath}`} element={<Component />} />;
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
