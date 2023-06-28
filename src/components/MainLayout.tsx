import SearchInput from './SearchInput';
import TableImage from './TableImage';

type MainLayoutProps = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  categories: string[];
};

const MainLayout = ({ categories, setCategories }: MainLayoutProps) => {
  return (
    <div>
      <SearchInput setCategories={setCategories} />
      <h3>Aqui se cargara todo el proyecto</h3>
      <TableImage categories={categories} />
    </div>
  );
};

export default MainLayout;
