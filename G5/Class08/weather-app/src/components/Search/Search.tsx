import { useState } from "react";
import "./Search.css";

interface SearchProps {
  handleSearch: (searchValue: string) => void;
}

export const Search = (props: SearchProps) => {
  const { handleSearch } = props;
  const [searchValue, setSearchValue] = useState("");

  const handleSetSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search city..."
        onChange={handleSetSearch}
      />
      <button onClick={() => handleSearch(searchValue)}>Search</button>
    </div>
  );
};
