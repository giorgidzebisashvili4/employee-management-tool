import React, { useState, useEffect } from "react";
import employeesData from "./data/employees.json";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import SearchFilter from "./components/SearchFilter";

const App = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

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

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (departmentFilter ? emp.department === departmentFilter : true)
  );

  return (
    <div>
      <h1>Employee Management App</h1>
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        departmentFilter={departmentFilter}
        setDepartmentFilter={setDepartmentFilter}
      />
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
