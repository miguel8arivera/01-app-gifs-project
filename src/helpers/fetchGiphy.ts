export interface Gifs {
  id: string;
  title: string;
  url: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}
type Props = {
  id: string;
  title: string;
  url: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
};

export const getGifs = async (category?: string) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=rwaappUeUylJfQoCiPpCoH5R4faHi876&q=${category}&limit=10`;
  const res = await fetch(URL);
  const { data } = await res.json();
  const gifs = data?.map((img: Props) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};

getGifs();
