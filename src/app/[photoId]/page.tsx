import React from 'react';
import Image from 'next/image';

import { getPhotoById } from 'apis/unsplash';

const PhotoPage = async ({
  params: { photoId },
}: {
  params: { photoId: string };
}) => {
  const photo = await getPhotoById(photoId);
  return (
    <div>
      <Image
        src={photo.urls.full}
        alt={photo.description || photo.alt_description || photo.id}
        width={photo.width}
        height={photo.height}
        className='w-full rounded-2xl'
      />
      <p>Photo ID: {photoId}</p>
    </div>
  );
};

export default PhotoPage;
