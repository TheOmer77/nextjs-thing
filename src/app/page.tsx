import PhotoGrid from 'components/PhotoGrid';
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from 'constants/unsplash';
import type { PhotosResponse } from 'types/unsplash';

const Home = async () => {
  const photos: PhotosResponse = await fetch(
    `${UNSPLASH_BASE_URL}/photos?per_page=100`,
    {
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    }
  ).then(res => res.json());

  return (
    <>
      <h1 className='mb-4 mt-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl lg:mb-8 lg:text-7xl'>
        Hello world! 👋🏻
      </h1>
      <PhotoGrid photos={photos} />
    </>
  );
};

export default Home;
