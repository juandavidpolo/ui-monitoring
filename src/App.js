import { BrowserRouter, Routes, Route } from "react-router";

import { getViews } from 'src/utils/routes';
import Layout from "src/components/layout";

const renderViews = () => {
  return getViews((routePath, module) => {
    const Component = module.default;
    return <Route key={routePath} path={`/${routePath}`} element={<Component />} />;
  });
};

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
