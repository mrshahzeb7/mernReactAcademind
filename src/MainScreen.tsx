import { url } from "inspector";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Users } from "./containers";

const MainScreen = (props) => {
  const URLs = {
    any: "*",
    baseUrl: "/",
    users: "/users",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URLs.baseUrl} element={<Users />} />
        <Route path={URLs.users} element={<Users />} />

        <Route
          path={URLs.any}
          element={<Navigate replace to={URLs.baseUrl} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainScreen;
