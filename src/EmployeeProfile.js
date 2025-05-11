import React from "react";
import { useParams } from "react-router-dom";

const EmployeeProfile = ({ employees }) => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div className="employee-profile">
      <h2>{employee.name}</h2>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Skills:</strong> {employee.skill}</p>
      <p><strong>Bio:</strong> {employee.bio}</p>
      <p><strong>Experience:</strong> {employee.experience}</p>
      <p><strong>Hobby:</strong> {employee.hobby}</p>
    </div>
  );
};

export default EmployeeProfile;
