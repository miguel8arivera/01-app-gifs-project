import CardGifs from './CardGifs';
import useFetchGifs from '../hooks/useFetchGifs';

function TableImage({ category }: { category: string }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div>{isLoading && <p>Loading...</p>}</div>
      <div className="card-grid">
        {images?.map((image) => (
          <CardGifs key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default TableImage;
