import React, { useState, useEffect } from "react";
import employeesData from "./data/employees.json";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import SearchFilter from "./components/SearchFilter";
import styles from "./App.module.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentQuery, setDepartmentQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isAscending, setIsAscending] = useState(true); // For sorting order

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      // If data exists in localStorage, use it
      setEmployees(JSON.parse(savedEmployees));
    } else {
      // If no data in localStorage, use default JSON data
      setEmployees(employeesData);

      // Save default JSON data to localStorage
      localStorage.setItem("employees", JSON.stringify(employeesData));
    }
  }, []);

  // Save employees to localStorage whenever they change
  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { id: prevEmployees.length + 1, ...employee },
    ]);
  };

  const handleSortByName = () => {
    const sortedEmployees = [...employees].sort((a, b) => {
      if (isAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setEmployees(sortedEmployees);
    setIsAscending(!isAscending); // Toggle sorting order
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      emp.department.toLowerCase().includes(departmentQuery.toLowerCase())
  );

  return (
    <div className={styles.app}>
      <h1>Employee Management App</h1>
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        departmentQuery={departmentQuery}
        setDepartmentQuery={setDepartmentQuery}
      />
      <button onClick={handleSortByName}>
        Sort by Name ({isAscending ? "Ascending" : "Descending"})
      </button>
      {searchQuery && filteredEmployees.length === 0 ? (
        <p>No employees found with the name "{searchQuery}"</p>
      ) : (
        <EmployeeList employees={filteredEmployees} />
      )}
      <button onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? "Cancel" : "Add Employee"}
      </button>
      {showForm && <EmployeeForm addEmployee={addEmployee} />}
    </div>
  );
};

export default App;
