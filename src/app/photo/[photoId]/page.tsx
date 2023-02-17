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
    <>
      <Image
        src={photo.urls.full}
        alt={photo.description || photo.alt_description || photo.id}
        width={photo.width}
        height={photo.height}
        className='absolute left-0 right-0 top-0 h-96 w-full bg-slate-50 object-contain pt-16 sm:h-[32rem] md:h-[36rem] lg:h-[40rem]'
      />
      <div className='mt-80 text-slate-900 lg:mt-[36rem]'>
        <p className='text-xl font-bold'>
          {photo.description || photo.alt_description || 'Untitled photo'}
        </p>
        <p className='text-slate-900/60'>
          Uploaded by {photo.user.name} on{' '}
          {new Date(photo.created_at).toLocaleString('en-US')}
        </p>
      </div>
    </>
  );
};

export default PhotoPage;
