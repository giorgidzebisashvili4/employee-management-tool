import React, { useState } from "react";
import styles from "./EmployeeForm.module.css";

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
      setFormData({ name: "", department: "", role: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Department"
        value={formData.department}
        onChange={(e) =>
          setFormData({ ...formData, department: e.target.value })
        }
        required
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Role"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        required
      />
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default EmployeeForm;
