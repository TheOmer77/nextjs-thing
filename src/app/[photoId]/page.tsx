import React from 'react';

const PhotoPage = async ({
  params: { photoId },
}: {
  params: { photoId: string };
}) => {
  return (
    <div>
      <p>Photo page TBD</p>
      <p>Photo ID: {photoId}</p>
    </div>
  );
};

export default PhotoPage;
