import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";

const Dashboard = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, title: "New Accounts", value: 586356 },
    { id: 2, title: "Sales", value: 23274 },
    { id: 3, title: "Revenue", value: 9693 }
  ]);

  const [newWidget, setNewWidget] = useState({ title: "", value: "" });

  const handleCreate = () => {
    setWidgets([...widgets, { id: Date.now(), ...newWidget }]);
    setNewWidget({ title: "", value: "" });
  };

  const handleUpdate = (id, newValue) => {
    setWidgets(
      widgets.map(widget =>
        widget.id === id ? { ...widget, value: newValue } : widget
      )
    );
  };

  const handleDelete = id => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <div className="dashboard-container">

      <div className="dashboard-content">
        <h2>Welcome to the Dashboard</h2>

        <div className="widgets">
          {widgets.map(widget => (
            <div key={widget.id} className="widget">
              <h3>{widget.title}</h3>
              <p>{widget.value}</p>
              <button onClick={() => handleUpdate(widget.id, widget.value + 1000)}>
                Update
              </button>
              <button onClick={() => handleDelete(widget.id)}>Delete</button>
            </div>
          ))}
        </div>

        <div className="create-widget">
          <h3>Add New Widget</h3>
          <input
            type="text"
            placeholder="Title"
            value={newWidget.title}
            onChange={e =>
              setNewWidget({ ...newWidget, title: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Value"
            value={newWidget.value}
            onChange={e =>
              setNewWidget({ ...newWidget, value: parseInt(e.target.value) })
            }
          />
          <button onClick={handleCreate}>Create Widget</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
