import classNames from 'classnames';
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface GridPhotoProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  id: string;
  src: string;
  alt?: string;
}

const GridPhoto = ({ id, src, alt, className, ...props }: GridPhotoProps) => (
  <img
    id={id}
    src={src}
    alt={alt}
    className={classNames(
      'aspect-square w-full rounded-lg object-cover',
      className
    )}
    {...props}
  />
);

export default GridPhoto;
