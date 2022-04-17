import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import NavbarComponent from "./components/NavbarComponent";
import PhotosList from "./components/PhotosList";
import { useFetching } from "./hooks/useFetching";
import { fetchPhotosAction } from "./store/photosReducer";

function App() {
  const dispatch = useDispatch();

  const [fetchPhotos, isPhotosLoading, photosError] = useFetching(() => {
    dispatch(fetchPhotosAction());
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className='App'>
      <NavbarComponent />
      <div style={{ paddingTop: 60 }}>
        {photosError && <p>Произошла ошибка {photosError}</p>}
        {isPhotosLoading ? <Loader /> : <PhotosList />}
      </div>
    </div>
  );
}

export default App;
