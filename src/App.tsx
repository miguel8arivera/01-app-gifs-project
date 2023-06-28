import { useState } from 'react';
import MainLayout from './components/MainLayout';

function App() {
  const [categories, setCategories] = useState<string[]>([
    'One',
    'Two',
    'Three',
  ]);

  return (
    <>
      <MainLayout categories={categories} setCategories={setCategories} />
    </>
  );
}

export default App;
