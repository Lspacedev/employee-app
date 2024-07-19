import { useState, useEffect } from "react";
import Employee from "./employee";
import { IoIosSearch } from "react-icons/io";

function DisplayEmployees({
  employees,
  handleDeleteEmployee,
  handleUpdate,
  handleResubmit,
}) {
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
            employee.email.match(searchInput)
        )
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

  return (
    <div className="Display">
      <div className="search-div">
        <IoIosSearch
          id="search-icon"
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
          placeholder="Search"
          onChange={handleSearchChange}
          value={searchInput}
        />
      </div>

      <ul className="employees-display">
        {searchResults.length !== 0
          ? searchResults.map((employee) => (
              <li key={employee.id}>
                <Employee
                  edit={employee.edit}
                  name={employee.name}
                  surname={employee.surname}
                  position={employee.position}
                  department={employee.department}
                  email={employee.email}
                  phone={employee.phone}
                  pic={employee.pic}
                  date={employee.date}
                  id={employee.id}
                  handleDeleteEmployee={handleDeleteEmployee}
                  handleUpdate={handleUpdate}
                  handleResubmit={handleResubmit}
                />
              </li>
            ))
          : employees.map((employee) => (
              <li key={employee.id}>
                <Employee
                  edit={employee.edit}
                  name={employee.name}
                  surname={employee.surname}
                  position={employee.position}
                  department={employee.department}
                  email={employee.email}
                  phone={employee.phone}
                  pic={employee.pic}
                  date={employee.date}
                  id={employee.id}
                  handleDeleteEmployee={handleDeleteEmployee}
                  handleUpdate={handleUpdate}
                  handleResubmit={handleResubmit}
                />
              </li>
            ))}
      </ul>
    </div>
  );
}

export default DisplayEmployees;
