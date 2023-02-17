import { getPhotos } from 'apis/unsplash';
import H1 from 'components/H1';
import PhotoGrid from 'components/PhotoGrid';
import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from 'constants/unsplash';

const HomePage = async () => {
  const photos = await getPhotos();

  return (
    <>
      <H1>Hello world! 👋🏻</H1>
      <PhotoGrid photos={photos} />
    </>
  );
};

export default HomePage;
