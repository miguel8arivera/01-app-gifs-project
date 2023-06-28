import { useState } from 'react';
import MainLayout from './components/MainLayout';

function App() {
  const [categories, setCategories] = useState<string[]>([
    'One',
    'Two',
    'Three',
  ]);

  const addNewCategory = (newCategory: string) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <MainLayout categories={categories} onNewCategory={addNewCategory} />
    </>
  );
}

export default App;
