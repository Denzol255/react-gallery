import React from "react";
import { useSelector } from "react-redux";
import PhotosGroup from "./PhotosGroup";

// Не совсем понял, что значит 'разбить на 4 категории', поэтому просто разбил на 4 ряда по 6 карточек в каждом
const PhotosList = () => {
  const photos = useSelector((state) => state.photos.photos);

  return (
    <div>
      <PhotosGroup className='mb-4' photos={photos.slice(0, 6)} categorie={1} />
      <PhotosGroup
        className='mb-4'
        photos={photos.slice(6, 12)}
        categorie={2}
      />
      <PhotosGroup
        className='mb-4'
        photos={photos.slice(12, 18)}
        categorie={3}
      />
      <PhotosGroup className='mb-4' photos={photos.slice(18)} categorie={4} />
    </div>
  );
};

export default PhotosList;
