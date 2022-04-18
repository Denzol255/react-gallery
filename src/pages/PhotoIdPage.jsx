import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const PhotoIdPage = () => {
  const params = useParams();

  return <Container>ID: {params.id}</Container>;
};

export default PhotoIdPage;
