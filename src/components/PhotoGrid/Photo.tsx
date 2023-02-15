import React from 'react';

interface PhotoProps {
  id: string;
  src: string;
  alt?: string;
}

const Photo = ({ id, src, alt }: PhotoProps) => (
  <img
    id={id}
    src={src}
    alt={alt}
    className='aspect-square w-full rounded-lg object-cover'
  />
);

export default Photo;
