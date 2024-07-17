import { useState } from "react";
import Employee from "./employee";

function DisplayEmployees({
  employees,
  handleDeleteEmployee,
  handleUpdate,
  handleResubmit,
}) {
  const [obj, setObj] = useState({
    name: "",
    surname: "",
    position: "",
    department: "",
    email: "",
    phone: "",
    edit: false,
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setObj((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="Display">
      <h1>Employees</h1>
      <ul className="employees-display">
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.edit ? (
              <div className="update-form">
                <div className="name">
                  <label htmlFor="fname">
                    Name:
                    <input
                      type="text"
                      id="fname"
                      name="name"
                      onChange={(e) => handleChange(e)}
                      value={obj.name}
                    />
                  </label>
                </div>
                <div className="surname">
                  <label htmlFor="lname">
                    Surname:
                    <input
                      type="text"
                      id="lname"
                      name="surname"
                      onChange={(e) => handleChange(e)}
                      value={obj.surname}
                    />
                  </label>
                </div>
                <div className="position">
                  <label htmlFor="position">
                    Position:
                    <input
                      type="text"
                      id="position"
                      name="position"
                      onChange={(e) => handleChange(e)}
                      value={obj.position}
                    />
                  </label>
                </div>
                <div className="department">
                  <label htmlFor="department">
                    Department:
                    <input
                      type="text"
                      id="department"
                      name="department"
                      onChange={(e) => handleChange(e)}
                      value={obj.department}
                    />
                  </label>
                </div>
                <div className="email">
                  <label htmlFor="email">
                    Email:
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => handleChange(e)}
                      value={obj.email}
                    />
                  </label>
                </div>
                <div className="phone-number">
                  <label htmlFor="phone-number">
                    Phone number:
                    <input
                      type="text"
                      id="phone-number"
                      name="phone"
                      onChange={(e) => handleChange(e)}
                      value={obj.phone}
                    />
                  </label>
                </div>
              </div>
            ) : (
              <Employee
                name={employee.name}
                surname={employee.surname}
                position={employee.position}
                department={employee.department}
                email={employee.email}
                phone={employee.phone}
                pic={employee.pic}
              />
            )}
            <div className="delete-update">
              <button
                className="update"
                onClick={() => {
                  employee.edit
                    ? handleResubmit(employee.id, obj)
                    : handleUpdate(employee.id);
                }}
              >
                {employee.edit ? "Update" : "Edit"}
              </button>

              <button
                className="delete"
                onClick={() => handleDeleteEmployee(employee.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayEmployees;
