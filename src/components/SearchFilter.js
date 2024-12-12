import React from "react";

const SearchFilter = ({
  searchQuery,
  setSearchQuery,
  departmentFilter,
  setDepartmentFilter,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        value={departmentFilter}
        onChange={(e) => setDepartmentFilter(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
        <option value="HR">HR</option>
      </select>
    </div>
  );
};

export default SearchFilter;
