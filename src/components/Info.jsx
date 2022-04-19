import React from "react";
import avatar from "../images/avatar.png";
import { Image } from "react-bootstrap";

const Info = () => {
  return (
    <div>
      <Image className='mt-4' src={avatar} roundedCircle></Image>
      <p className='mt-2 mb-0'>Денис Золотарев</p>
      <a href='mailto:denzoloto@gmail.com'>denzoloto@gmail.com</a>
    </div>
  );
};

export default Info;
