import { UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL } from 'constants/unsplash';
import type { Photo } from 'types/unsplash';

const unsplash = async (url: string, config?: RequestInit) =>
  await fetch(`${UNSPLASH_BASE_URL}${url}`, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      ...config?.headers,
    },
  }).then(res => res.json());

export default unsplash;

export const getPhotos = async ({
  count = 100,
}: {
  count?: number;
} = {}): Promise<Photo[]> => await unsplash(`/photos?per_page=${count}`);
