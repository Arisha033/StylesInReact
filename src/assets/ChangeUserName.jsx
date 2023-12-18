import React from "react";
import { useState } from "react";

export const ChangeUserName = () => {
  const [userName, setUserName] = useState("Unknown");

  const handleClick = () => {
    setUserName("Alex");
  };

  return (
    <>
      <h5>{userName}</h5>
      <button onClick={handleClick} style={{ border: "2px solid" }}>
        Change Name
      </button>
    </>
  );
};
