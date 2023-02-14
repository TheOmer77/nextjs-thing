import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from "constants/unsplash";
import type { PhotosResponse } from "types/unsplash";

const Home = async () => {
  const photos: PhotosResponse = await fetch(`${UNSPLASH_BASE_URL}/photos`, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
  }).then((res) => res.json());

  return (
    <>
      <h1 className="mb-8 mt-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Hello world! 👋🏻
      </h1>
      <div className="grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.small}
            alt={photo.description || photo.alt_description}
            className="aspect-square w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </>
  );
};

export default Home;
