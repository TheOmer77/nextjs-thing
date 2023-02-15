import React from 'react';
import { PhotosResponse } from 'types/unsplash';
import Photo from './Photo';

interface PhotoGridProps {
  photos: PhotosResponse;
}

const PhotoGrid = ({ photos, ...props }: PhotoGridProps) => {
  return (
    <div
      {...props}
      className='grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
    >
      {photos.map(photo => (
        <Photo
          key={photo.id}
          id={photo.id}
          src={photo.urls.small}
          alt={photo.description || photo.alt_description}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
