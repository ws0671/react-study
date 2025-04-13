import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import useSearchStore from "../stores/useSearchStore";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchContact } = usePhoneBookStore();
  const { searchResult, updateSearchResult } = useSearchStore();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      updateSearchResult(null);
    } else {
      const result = searchContact(searchValue);
      updateSearchResult(result);
    }
  };
  return (
    <form className="flex gap-1" onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className="border-1 rounded-lg flex-grow px-2"
      />
      <button className="border-1 rounded-lg w-8 h-8 grid place-content-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};
export default SearchBar;
