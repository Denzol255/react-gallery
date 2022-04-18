import React, { useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useFetching } from "../hooks/useFetching";
import { fetchSinglePhotoAction } from "../store/photosReducer";

const PhotoIdPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photos.photo);

  const [fetchPhoto, isPhotoLoading, photoError] = useFetching((id) => {
    dispatch(fetchSinglePhotoAction(id));
  });

  useEffect(() => {
    fetchPhoto(params.id);
  }, []);

  return (
    <Container>
      {photoError && <h2>Произошла ошибка при загрузке фото: {photoError}</h2>}
      {isPhotoLoading ? (
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
