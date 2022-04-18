import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import PhotosList from "../components/PhotosList";
import { useFetching } from "../hooks/useFetching";
import { fetchPhotosAction } from "../store/photosReducer";
import "../styles/style.scss";

function Gallery() {
  const dispatch = useDispatch();

  const [fetchPhotos, isPhotosLoading, photosError] = useFetching(() => {
    dispatch(fetchPhotosAction());
  });

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      {photosError && <p>Произошла ошибка {photosError}</p>}
      {isPhotosLoading ? <Loader /> : <PhotosList />}
    </div>
  );
}

export default Gallery;
