import { getPhotos } from 'apis/unsplash';
import PhotoGrid from 'components/PhotoGrid';
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from 'constants/unsplash';

const HomePage = async () => {
  const photos = await getPhotos();

  return (
    <>
      <h1 className='mb-4 mt-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-6xl lg:mb-8 lg:text-7xl'>
        Hello world! 👋🏻
      </h1>
      <PhotoGrid photos={photos} />
    </>
  );
};

export default HomePage;
