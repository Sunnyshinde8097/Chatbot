import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";

const AddEmployee = ({ setEmployees, employees }) => {
  const [form, setForm] = useState({
    name: "",
    position: "",
    skill: "",
    bio: "",
    experience: "",
    hobby: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(),
      ...form,
    };
    setEmployees([...employees, newEmployee]);
    navigate("/");
  };

  return (
    <div className="add-employee-container">
      <div className="form-container">
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={form.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Skill</label>
            <input
              type="text"
              name="skill"
              placeholder="Skill"
              value={form.skill}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              placeholder="Bio"
              value={form.bio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={form.experience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Hobby</label>
            <input
              type="text"
              name="hobby"
              placeholder="Hobby"
              value={form.hobby}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Save Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
