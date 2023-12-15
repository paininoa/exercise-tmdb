import { useState } from "react";
import "./SearchBar.scss";

export default ({ searchValue, handleChange, onSearch }) => {
  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        onClick={onSearch}
        disabled={searchValue.trim() === "" ? true : false}
      >
        Search
      </button>
    </>
  );
};
