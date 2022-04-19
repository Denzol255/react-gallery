import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <div>
        <h1>Обо мне</h1>
        <p className='about-text'>
          Привет! Я уже около года года активно изучаю фронтенд разработку, как
          по курсам так и самостоятельно. Проходил курсы по программам "HTML5,
          CSS3", "Javascript", "Базовый React" от Glo-Academy. В данный момент
          активно изучаю React, Redux, Redux-saga. Немного знаком с Vue, был
          мало знаком с React-Bootstrap (обычно верстал все сам "руками"), но
          после этого тестого смог укрепить знания в нём! Так же в данный момент
          в данный момент разрабатываю приложение на React по поиску книг с
          применением Google Books API.
        </p>
        <Link className='back-to-main' to='/'>
          Вернуться на главную
        </Link>
      </div>
    </Container>
  );
};

export default About;
