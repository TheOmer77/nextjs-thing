import { getPhotoById } from 'apis/unsplash';
import React from 'react';

const PhotoPage = async ({
  params: { photoId },
}: {
  params: { photoId: string };
}) => {
  const photo = await getPhotoById(photoId);
  return (
    <div>
      <img
        src={photo.urls.regular}
        alt={photo.description || photo.alt_description || photo.id}
        className='w-full rounded-2xl'
      />
      <p>Photo ID: {photoId}</p>
    </div>
  );
};

export default PhotoPage;
