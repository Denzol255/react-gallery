import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import PhotoIdPage from "../pages/PhotoIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Gallery />}></Route>
      <Route path='/:id' element={<PhotoIdPage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/error' element={<Error />}></Route>
      <Route path='*' element={<Navigate to='/error' />} />
    </Routes>
  );
};

export default AppRouter;
