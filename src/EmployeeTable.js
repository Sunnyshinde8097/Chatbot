import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Employeetable.css";

const EmployeeTable = ({ employees = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 3;

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const totalPages = Math.ceil(employees.length / employeesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="employee-container">
      <h2>Employee Management</h2>
      <Link to="/AddEmployee">
        <button className="btn-add">Add New Employee</button>
      </Link>

      {employees.length === 0 ? (
        <p className="no-employees">No employees available.</p>
      ) : (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>
                  <Link to={`/EmployeeProfile/${emp.id}`} className="employee-link">
                    {emp.name}
                  </Link>
                </td>
                <td>{emp.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => paginate(idx + 1)}
            className={`pagination-btn ${currentPage === idx + 1 ? "active" : ""}`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
