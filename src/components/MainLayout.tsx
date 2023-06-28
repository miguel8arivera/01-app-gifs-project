import SearchInput from './SearchInput';
import TableImage from './TableImage';

type MainLayoutProps = {
  categories: string[];
  onNewCategory?: (newCategory: string) => void;
};

const MainLayout = ({ categories, onNewCategory }: MainLayoutProps) => {
  return (
    <div>
      <SearchInput onNewCategory={onNewCategory} />
      <h3>Aqui se cargara todo el proyecto</h3>
      <TableImage categories={categories} />
    </div>
  );
};

export default MainLayout;
