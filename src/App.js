import React, { useState, useEffect, useMemo } from "react";
import employeesData from "./data/employees.json";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import SearchFilter from "./components/SearchFilter";
import Button from "./components/Button";
import styles from "./App.module.css";

const App = () => {
  const [employees, setEmployees] = useState([]); // Starts as empty
  const [nameQuery, setNameQuery] = useState("");
  const [departmentQuery, setDepartmentQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isAscending, setIsAscending] = useState(true); // For sorting order
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load data on first render
  useEffect(() => {
    try {
      const savedEmployees = localStorage.getItem("employees");
      if (savedEmployees && savedEmployees !== "[]") {
        setEmployees(JSON.parse(savedEmployees));
      } else {
        setEmployees(employeesData);
        localStorage.setItem("employees", JSON.stringify(employeesData));
      }
    } catch (err) {
      setError("Failed to load employee data.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save employees to localStorage whenever they change
  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  }, [employees]);

  // Add a new employee
  const addEmployee = (employee) => {
    const updatedEmployees = [
      ...employees,
      { id: employees.length + 1, ...employee },
    ];
    setEmployees(updatedEmployees); // Add and maintain sorting order
    setShowForm(false);
  };

  // Sort employees by name
  const handleSortByName = () => {
    const sortedEmployees = [...employees].sort((a, b) =>
      isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setEmployees(sortedEmployees);
    setIsAscending(!isAscending); // Toggle sorting order
  };

  // Filter employees based on queries
  // useMemo to avoid unnecessary re-renders
  // in small apps useMemo memo useCallback is not needed but in larger apps it can be useful
  // and its outside of our scope
  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
        emp.department.toLowerCase().includes(departmentQuery.toLowerCase())
    );
  }, [employees, nameQuery, departmentQuery]);

  return (
    <div className={styles.app}>
      <h1>Employee Management App</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!error && (
        <>
          <div className={styles.searchFilters}>
            <SearchFilter
              name="Search by Name"
              searchQuery={nameQuery}
              setSearchQuery={setNameQuery}
            />
            <SearchFilter
              name="Filter by Department"
              searchQuery={departmentQuery}
              setSearchQuery={setDepartmentQuery}
            />
          </div>

          <EmployeeList
            employees={filteredEmployees}
            nameQuery={nameQuery}
            departmentQuery={departmentQuery}
          >
            <Button
              onClick={handleSortByName}
              text="Sort by Name "
              dynamicText={isAscending ? "(Ascending)" : "(Descending)"}
            />
          </EmployeeList>

          <Button
            onClick={() => setShowForm((prev) => !prev)}
            text=""
            dynamicText={showForm ? "Cancel" : "Add Employee"}
          />
          {showForm && <EmployeeForm addEmployee={addEmployee} />}
        </>
      )}
    </div>
  );
};

export default App;
