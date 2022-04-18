import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import NavbarComponent from "./components/NavbarComponent";
import PhotosList from "./components/PhotosList";
import { useFetching } from "./hooks/useFetching";
import { fetchPhotosAction } from "./store/photosReducer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
