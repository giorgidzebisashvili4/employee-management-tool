import React from "react";
import styles from "./EmployeeList.module.css";

const EmployeeList = ({ employees, nameQuery, departmentQuery }) => {
  if (employees.length === 0) {
    if (nameQuery && departmentQuery) {
      return (
        <p>
          No employees found with the name "{nameQuery}" in the department "
          {departmentQuery}"
        </p>
      );
    }
    if (nameQuery) {
      return <p>No employees found with the name "{nameQuery}"</p>;
    }
    return (
      <p className={styles.noData}>
        No department found with the name "{departmentQuery}"
      </p>
    );
  }

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className={styles.row}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
