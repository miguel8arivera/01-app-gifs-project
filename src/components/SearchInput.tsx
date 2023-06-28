import { useState } from 'react';

type SearchInputProps = {
  setCategories?: React.Dispatch<React.SetStateAction<string[]>>;
};

function SearchInput({ setCategories }: SearchInputProps) {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputSearchValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputSearchValue.trim().length <= 2) return;
    // setCategories && setCategories((prev) => [inputSearchValue, ...prev]);
    setCategories && setCategories((prev) => [inputSearchValue, ...prev]);

    setInputSearchValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        value={inputSearchValue}
        onChange={handleChangeInput}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchInput;
