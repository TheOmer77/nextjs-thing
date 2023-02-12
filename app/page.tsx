import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from "@/constants/unsplash";
import type { PhotosResponse } from "@/types/unsplash";

const Home = async () => {
  const photos: PhotosResponse = await fetch(`${UNSPLASH_BASE_URL}/photos`, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
  }).then((res) => res.json());

  return (
    <>
      <h1 className="text-5xl font-bold">Hello world! 👋🏻</h1>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.description || photo.alt_description}
        />
      ))}
    </>
  );
};

export default Home;
