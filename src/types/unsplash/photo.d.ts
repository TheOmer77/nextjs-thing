import type { Entity } from './general';
import type { BasicUser } from './user';
import type { Nullable } from '../helpers';

interface StatValue {
  value: number;
  date: string;
}

interface Stat {
  total: number;
  historical: {
    change: number;
    quantity: number;
    resolution: string;
    values: StatValue[];
  };
}

export interface Stats extends Entity {
  views: Stat;
  downloads: Stat;
}

export interface VeryBasicPhoto extends Entity {
  created_at: string;
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface BasicPhoto extends VeryBasicPhoto {
  alt_description: Nullable<string>;
  blur_hash: Nullable<string>;
  color: Nullable<string>;
  description: Nullable<string>;
  height: number;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: Nullable<string>;
  width: number;
  user: BasicUser;
}

interface PhotoWithExifAndLocation {
  exif: {
    make: Nullable<string>;
    model: Nullable<string>;
    exposure_time: Nullable<string>;
    aperture: Nullable<string>;
    focal_length: Nullable<string>;
    iso: Nullable<number>;
  };
  location: {
    city: Nullable<string>;
    country: Nullable<string>;

    /** full string representation of the location, including `city` and `country` if they exist. */
    name: Nullable<string>;

    position: {
      latitude: Nullable<number>;
      longitude: Nullable<number>;
    };
  };
}

export interface Photo extends BasicPhoto, PhotoWithExifAndLocation {}
