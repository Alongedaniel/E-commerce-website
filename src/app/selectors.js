import React from "react";
import { useSelector } from "react-redux";

const useSelectors = () => {
  const user = useSelector((state) => state.user.currentUser);
  const error = useSelector((state) => state.user.error);
  const authenticatedUser = useSelector(
    (state) => state.user.authenticatedUser
  );
  const isAuthenticatedUser = useSelector(
    (state) => state.user.isAuthenticatedUser
  );
  return {
    user,
    authenticatedUser,
    error,
    isAuthenticatedUser,
  };
};

export default useSelectors;
