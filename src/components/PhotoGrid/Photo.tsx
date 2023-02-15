import classNames from 'classnames';
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface PhotoProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  id: string;
  src: string;
  alt?: string;
}

const Photo = ({ id, src, alt, className, ...props }: PhotoProps) => (
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

export default Photo;
