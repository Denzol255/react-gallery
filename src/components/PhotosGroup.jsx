import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PhotosGroup = ({ photos, categorie, ...props }) => {
  const navigate = useNavigate();

  return (
    <div {...props}>
      <h2 className='mb-3'>Категория {categorie}</h2>
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
                  <Button onClick={() => navigate(`photo/${photo.id}`)}>
                    Подробнее
                  </Button>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PhotosGroup;
