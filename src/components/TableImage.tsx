function TableImage({ categories }: { categories: string[] }) {
  return (
    <>
      {categories?.map((category, index) => (
        <ul key={index}>
          <li>{category}</li>
        </ul>
      ))}
    </>
  );
}

export default TableImage;
