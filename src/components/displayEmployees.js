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
    ""
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
            employee.email.match(submittedSearch)
        )
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

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setObj((prev) => ({ ...prev, [name]: value }));
  }

  function handleImageUpload(e) {
    let input = document.getElementById("profile-pic2");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);

    fReader.onloadend = function (event) {
      setObj({ ...obj, pic: event.target.result });
    };
    /*let url = URL.createObjectURL(e.target.files[0]);
    obj.pic = url;*/
  }

  return (
    <div className="Display">
      <div className="search-div">
        <IoIosSearch
          onClick={handleSearchSubmit}
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
                  name={employee.name}
                  surname={employee.surname}
                  position={employee.position}
                  department={employee.department}
                  email={employee.email}
                  phone={employee.phone}
                  pic={employee.pic}
                  date={employee.date}
                  id={employee.id}
                />
              </li>
            ))
          : employees.map((employee) => (
              <li key={employee.id}>
                {employee.edit ? (
                  <div className="update-form">
                    <div className="name">
                      <label htmlFor="fname">
                        <input
                          type="text"
                          id="fname"
                          name="name"
                          placeholder="Name"
                          onChange={(e) => handleChange(e)}
                        />
                      </label>
                    </div>
                    <div className="surname">
                      <label htmlFor="lname">
                        <input
                          type="text"
                          id="lname"
                          name="surname"
                          placeholder="Surname"
                          onChange={(e) => handleChange(e)}
                        />
                      </label>
                    </div>
                    <div className="position">
                      <label htmlFor="position">
                        <input
                          type="text"
                          id="position"
                          name="position"
                          placeholder="Position"
                          onChange={(e) => handleChange(e)}
                        />
                      </label>
                    </div>
                    <div className="department">
                      <label htmlFor="department">
                        <input
                          type="text"
                          id="department"
                          name="department"
                          placeholder="Department"
                          onChange={(e) => handleChange(e)}
                        />
                      </label>
                    </div>
                    <div className="email">
                      <label htmlFor="edit-email">
                        <input
                          type="email"
                          id="edit-email"
                          name="email"
                          placeholder="Email"
                          onChange={(e) => handleChange(e)}
                        />
                      </label>
                    </div>
                    <div className="phone-number">
                      <label htmlFor="edit-phone-number">
                        <input
                          type="text"
                          id="edit-phone-number"
                          name="phone"
                          placeholder="Phone number"
                          onChange={(e) => handleChange(e)}
                        />
                      </label>
                    </div>
                    <div className="date">
                      <label htmlFor="date">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          placeholder=" Date"
                          onChange={(e) => handleChange(e)}
                        />
                        <div className="profile-pic2">
                          <label htmlFor="profile-pic2">
                            Profile picture:
                            <input
                              type="file"
                              id="profile-pic2"
                              name="pic"
                              onChange={(e) => handleImageUpload(e)}
                            />
                          </label>
                        </div>
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
                    id={employee.id}
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
