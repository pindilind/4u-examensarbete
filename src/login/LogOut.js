import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function LogOut() {
  useEffect(() => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
  })

  return (
      <Redirect to="/" />
  );
}

export default LogOut;