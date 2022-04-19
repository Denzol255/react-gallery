import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import PhotosList from "../components/PhotosList";
import { loadPhotosLoadingAction } from "../store/action-creators/action-creators";
import "../styles/style.scss";
import ErrorComponent from "../components/ErrorComponent";

function Gallery() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(loadPhotosLoadingAction());
  }, []);

  return (
    <Container>
      {error && (
        <ErrorComponent>
          Произошла ошибка при загрузке фото: {error}
        </ErrorComponent>
      )}
      {loading ? <Loader /> : <PhotosList />}
    </Container>
  );
}

export default Gallery;
