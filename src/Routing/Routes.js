import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*">
          <Route
            path=""
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default PrivateRoutes;
