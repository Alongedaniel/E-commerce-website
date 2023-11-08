import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else {
      setUser({});
      setIsAuthenticated(false);
    }
  }, []);
  return { user, isAuthenticated };
};

export default User;
