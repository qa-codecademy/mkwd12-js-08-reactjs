import { useEffect, useState } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  onSearch: (value: string) => void;
  defaultValue: string | null;
}

function SearchInput({ onSearch, defaultValue }: SearchInputProps) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue) onSearch(value);
  }, [defaultValue, value, onSearch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, onSearch]);

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
