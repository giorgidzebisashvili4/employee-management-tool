import React, { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.department && formData.role) {
      addEmployee(formData);
      setFormData({ name: "", department: "", role: "" }); // Reset form
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={formData.department}
        onChange={(e) =>
          setFormData({ ...formData, department: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
