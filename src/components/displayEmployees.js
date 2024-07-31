import { useState, useEffect } from "react";
import Employee from "./employee";
import useLocalStorage from "./useLocalStorage";
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
    date: "",
    pic: "",
    edit: false,
  });

  const [searchInput, setSearchInput] = useLocalStorage("searchInput", "");
  const [submittedSearch, setsubmittedSearch] = useLocalStorage(
    "submittedSearch",
    "",
  );

  const [searchResults, setSearchResults] = useState([]);

  /* Update screen on every change in search input */

  useEffect(() => {
    if (submittedSearch.length > 0) {
      setSearchResults(
        employees.filter(
          (employee) =>
            employee.name.toLowerCase().match(submittedSearch.toLowerCase()) ||
            employee.surname
              .toLowerCase()
              .match(submittedSearch.toLowerCase()) ||
            employee.position
              .toLowerCase()
              .match(submittedSearch.toLowerCase()) ||
            employee.department
              .toLowerCase()
              .match(submittedSearch.toLowerCase()) ||
            employee.id.toString().match(submittedSearch) ||
            employee.phone.toString().match(submittedSearch.toString()) ||
            employee.email.match(submittedSearch),
        ),
      );
    }
    return () => {
      setSearchResults([]);
    };
  }, [employees, submittedSearch]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      setsubmittedSearch("");
    }
    setSearchInput(e.target.value);
  };
  function handleSearchSubmit() {
    setsubmittedSearch(searchInput);
  }

  return (
    <div className="Display">
      <div className="search-div">
        <IoIosSearch
          id="search-icon"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            fontSize: "1.6rem",
            margin: "0px",
          }}
        />
        <input
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
          value={searchInput}
        />
        <button id="search-btn" onClick={handleSearchSubmit}>
          search
        </button>
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
