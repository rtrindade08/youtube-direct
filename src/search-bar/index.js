import React, { useState } from "react";
import "./styles.scss";
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <input
        placeholder={"teste"}
        className="searchBar"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
