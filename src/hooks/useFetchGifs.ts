import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/fetchGiphy';

interface Card {
  id: string;
  title: string;
  url: string;
}

const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addNewImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    addNewImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
