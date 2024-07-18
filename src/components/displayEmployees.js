import { useState, useEffect } from "react";
import Employee from "./employee";
import { IoIosSearch } from "react-icons/io";

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

  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  /* Update screen on every change in search input */

  useEffect(() => {
    if (searchInput.length > 0) {
      setSearchResults(
        employees.filter(
          (employee) =>
            employee.name.toLowerCase().match(searchInput.toLowerCase()) ||
            employee.surname.toLowerCase().match(searchInput.toLowerCase()) ||
            employee.position.toLowerCase().match(searchInput.toLowerCase()) ||
            employee.department
              .toLowerCase()
              .match(searchInput.toLowerCase()) ||
            employee.id.toString().match(searchInput) ||
            employee.phone.toString().match(searchInput.toString()) ||
            employee.email.match(searchInput),
        ),
      );
    }
    return () => {
      setSearchResults([]);
    };
  }, [employees, searchInput]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setObj((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="Display">
      <h1>Employees</h1>
      <div className="search-div">
        <IoIosSearch
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "1.6rem",
            marginRight: "0px",
            padding: "0px",
          }}
        />
        <input
          type="search"
          onChange={handleSearchChange}
          value={searchInput}
        />
      </div>
      <ul className="employees-display">
        {searchResults.length !== 0
          ? searchResults.map((employee) => (
              <li key={employee.id}>
                <Employee
                  name={employee.name}
                  surname={employee.surname}
                  position={employee.position}
                  department={employee.department}
                  email={employee.email}
                  phone={employee.phone}
                  pic={employee.pic}
                  date={employee.date}
                />
              </li>
            ))
          : employees.map((employee) => (
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
                    date={employee.date}
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
