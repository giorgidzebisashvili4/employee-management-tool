import React, { useState, useEffect } from "react";
import employeesData from "./data/employees.json";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import SearchFilter from "./components/SearchFilter";
import styles from "./App.module.css";

const App = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentQuery, setDepartmentQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isAscending, setIsAscending] = useState(true); // For sorting order

  // Load data from employees.json or localStorage
  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");
    setEmployees(savedEmployees ? JSON.parse(savedEmployees) : employeesData);
  }, []);

  // Save employees to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { id: prevEmployees.length + 1, ...employee },
    ]);
    setShowForm(false); // Hide form after adding
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
