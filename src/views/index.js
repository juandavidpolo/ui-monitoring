import React from "react";
import { Routes, Route, Navigate } from "react-router";

import { getViews } from 'src/utils/routes';

import Layout from "src/components/layout";

const Views = () => {
  return(
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/monitor" replace />} />
        {getViews((routePath, module) => {
          const Component = module.default;
          return <Route key={routePath} path={`/${routePath}`} element={<Component />} />;
        })}
      </Routes>
    </Layout>
  )
}

export default Views;