import React from "react";
import styles from "./SearchFilter.module.css";

const SearchFilter = ({
  searchQuery,
  setSearchQuery,
  departmentQuery,
  setDepartmentQuery,
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Search by department"
        value={departmentQuery}
        onChange={(e) => setDepartmentQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
