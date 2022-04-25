import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
