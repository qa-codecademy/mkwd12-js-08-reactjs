import { useState } from "react";
import "./Search.css";

export const Search = () => {
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
      <button>Search</button>
    </div>
  );
};
