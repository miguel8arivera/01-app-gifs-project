import { useState } from 'react';
import SearchInput from './components/SearchInput';
import TableImage from './components/TableImage';
import './App.css';
function App() {
  const [categories, setCategories] = useState<string[]>(['']);

  const addNewCategory = (newCategory: string) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>Buscardor de Gifs:</h2>
      <SearchInput onNewCategory={addNewCategory} />
      {categories.map((category) => (
        <TableImage key={category} category={category} />
      ))}
    </>
  );
}

export default App;
