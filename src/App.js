import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import NotificationsManager from "src/components/notifications";
import Views from "./views";
import Login from "./views/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Views/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <NotificationsManager/>
    </>
  );
}

export default App;
