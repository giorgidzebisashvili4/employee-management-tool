import React from "react";

const EmployeeList = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
