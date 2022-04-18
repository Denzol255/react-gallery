import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PhotosList = () => {
  const photos = useSelector((state) => state.photos.photos);
  const navigate = useNavigate();

  return (
    <Container>
      <Row xs={1} lg={6} md={3} className='g-4'>
        {photos.map((photo) => {
          return (
            <Col key={photo.id}>
              <Card>
                <Card.Img
                  variant='top'
                  src={photo.url}
                  className='card-img img-fluid'
                />
                <Card.ImgOverlay>
                  <Button onClick={() => navigate(`/${photo.id}`)}>
                    Подробнее
                  </Button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PhotosList;
