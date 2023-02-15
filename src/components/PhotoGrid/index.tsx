import classNames from 'classnames';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import GridPhoto from './Photo';
import type { Photo } from 'types/unsplash';

interface PhotoGridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photos: Photo[];
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
        <GridPhoto
          key={photo.id}
          id={photo.id}
          src={photo.urls.small}
          alt={photo.description || photo.alt_description || photo.id}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
