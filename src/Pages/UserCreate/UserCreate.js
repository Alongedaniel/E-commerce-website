import React, { useState } from "react";

const UserCreate = () => {
  const [newUser, setNewUser] = useState({
    address: {
      city: "",
      street: "",
      number: null,
      zipcode: null,
    },
    id: Math.floor(Math.random() * 9000000000 + 1000000000).toString(),
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    phone: "",
  });
  return <div></div>;
};

export default UserCreate;
