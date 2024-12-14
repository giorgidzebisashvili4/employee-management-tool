import React from "react";
import styles from "./SearchFilter.module.css";

const SearchFilter = ({ name, searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={name}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
