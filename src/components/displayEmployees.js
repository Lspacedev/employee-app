import { useState } from "react";

function DisplayEmployees({
  employees,
  handleDeleteEmployee,
  handleUpdate,
  handleResubmit,
}) {
  const [name, setName] = useState("");
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
  console.log("ppd", name);
  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.edit ? (
              <div>
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
              <div>
                <div>{employee.name}</div>
                <div>{employee.surname}</div>
                <div>{employee.position}</div>
                <div>{employee.department}</div>
                <div>{employee.email}</div>
                <div>{employee.phone}</div>
              </div>
            )}
            <button
              onClick={() => {
                employee.edit
                  ? handleResubmit(employee.id, obj)
                  : handleUpdate(employee.id);
              }}
            >
              {employee.edit ? "Update" : "Edit"}
            </button>

            <button onClick={() => handleDeleteEmployee(employee.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayEmployees;
