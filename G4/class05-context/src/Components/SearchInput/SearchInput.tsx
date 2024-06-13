import { useEffect, useState } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder="🔎 Start searching for products..."
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchInput;
