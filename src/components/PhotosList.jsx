import React from "react";
import { useSelector } from "react-redux";

const PhotosList = () => {
  const photos = useSelector((state) => state.photos.photos);
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>{photo.url}</li>
      ))}
    </ul>
  );
};

export default PhotosList;
