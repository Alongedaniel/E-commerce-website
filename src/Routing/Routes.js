import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import User from "../User/User";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Cart from "../Pages/Cart/Cart";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = User();
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*">
          <Route
            path="login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />
          <Route
            path="sign-up"
            element={
              <MainLayout>
                <SignUp />
              </MainLayout>
            }
          />
          <Route
            path=""
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="wishlist"
            element={
              <RequireAuth>
                <MainLayout>
                  <Wishlist />
                </MainLayout>
              </RequireAuth>
            }
          />
          <Route
            path="cart"
            element={
              <RequireAuth>
                <MainLayout>
                  <Cart />
                </MainLayout>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default PrivateRoutes;
