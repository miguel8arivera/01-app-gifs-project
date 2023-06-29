import CardGifs from './CardGifs';
import useFetchGifs from '../hooks/useFetchGifs';

function TableImage({ category }: { category: string }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {images?.map((image) => (
        <CardGifs key={image.id} {...image} />
      ))}
    </>
  );
}

export default TableImage;
