import React from "react";
import { useSelector, useDispatch } from "react-redux";

const useSelectors = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const error = useSelector((state) => state.user.error);
  const authenticatedUser = useSelector((state) => state.user.currentUser);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return {
    user,
    authenticatedUser,
    error,
    isAuthenticated,
    dispatch,
  };
};

export default useSelectors;
