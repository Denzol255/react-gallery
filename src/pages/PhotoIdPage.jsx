import React, { useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { loadSinglePhotoLoadingAction } from "../store/action-creators/action-creators";
import ErrorComponent from "../components/ErrorComponent";

const PhotoIdPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.photos);
  const photo = useSelector((state) => state.photos.singlePhoto);

  useEffect(() => {
    dispatch(loadSinglePhotoLoadingAction(params.id));
  }, []);

  return (
    <Container>
      {error && (
        <ErrorComponent>
          Произошла ошибка при загрузке фото: {error}
        </ErrorComponent>
      )}
      {loading ? (
        <Loader />
      ) : (
        <Card>
          <Card.Img variant='top' src={photo.url}></Card.Img>
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
            <Card.Text>ID: {photo.id}</Card.Text>
            <LinkContainer to='/'>
              <Button>Назад</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default PhotoIdPage;
