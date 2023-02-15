import classNames from 'classnames';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import Photo from './Photo';
import type { PhotosResponse } from 'types/unsplash';

interface PhotoGridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photos: PhotosResponse;
}

const PhotoGrid = ({ photos, className, ...props }: PhotoGridProps) => {
  return (
    <div
      {...props}
      className={classNames(
        'grid grid-cols-fluid items-center justify-items-center gap-4',
        className
      )}
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
