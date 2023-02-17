import classNames from 'classnames';
import Link from 'next/link';
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
  <Link href={`/photo/${id}`}>
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
  </Link>
);

export default GridPhoto;
