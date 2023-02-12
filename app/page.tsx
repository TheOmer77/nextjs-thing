import { UNSPLASH_BASE_URL, UNSPLASH_ACCESS_KEY } from "@/constants/unsplash";

const Home = async () => {
  // TODO: Unsplash JS API, it has TypeScript definitions
  const photos = await fetch(`${UNSPLASH_BASE_URL}/photos`, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
  }).then((res) => res.json());

  return (
    <main>
      <h1 className="text-5xl font-bold">Hello world! 👋🏻</h1>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.description || photo.alt_description}
        />
      ))}
    </main>
  );
};

export default Home;
