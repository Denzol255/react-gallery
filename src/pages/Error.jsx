import React from "react";
import { Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

// Страница для перехода по несуществующим ссылкам
const Error = () => {
  return (
    <Container>
      <Alert variant='danger'>
        <Alert.Heading>Ошибка!</Alert.Heading>
        <p>Вы перешли на несуществующую страницу</p>
        <Link className='back-to-main' to='/'>
          Вернуться на главную
        </Link>
      </Alert>
    </Container>
  );
};

export default Error;
