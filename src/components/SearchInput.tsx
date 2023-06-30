import { useState } from 'react';

type SearchInputProps = {
  setCategories?: React.Dispatch<React.SetStateAction<string[]>>;
  onNewCategory: (newCategory: string) => void;
};

function SearchInput({ onNewCategory }: SearchInputProps) {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputSearchValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputSearchValue.trim().length <= 2) return;
    // setCategories && setCategories((prev) => [inputSearchValue, ...prev]);
    onNewCategory && onNewCategory(inputSearchValue.trim());

    setInputSearchValue('');
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="search-input"
        type="search"
        value={inputSearchValue}
        onChange={handleChangeInput}
      />
      <button className="search-button">Search</button>
    </form>
  );
}

export default SearchInput;
