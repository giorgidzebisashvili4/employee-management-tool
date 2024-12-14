import React from "react";
import styles from "./EmployeeList.module.css";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.length > 0 ? (
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
      ) : (
        <p className={styles.noData}>No department found</p>
      )}
    </div>
  );
};

export default EmployeeList;
