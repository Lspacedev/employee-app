import { useState } from "react";
import { Image } from "react";
function Form({ handleAddEmployees, toggleClicked, count }) {
  const [obj, setObj] = useState({
    id: count,
    name: "",
    surname: "",
    position: "",
    department: "",
    email: "",
    phone: "",
    pic: "",
    image: "./profile.png",
    edit: false,
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setObj((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddEmployees(obj);
    toggleClicked();
  }

  return (
    <div>
      <h3>Employee Information</h3>

      <form>
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
        <div className="profile-pic">
          <label htmlFor="profile-pic">
            Profile pic:
            <input
              type="file"
              id="profile-pic"
              name="pic"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>

        <input
          type="submit"
          value="submit"
          onClick={(e) => handleSubmit(e)}
        ></input>
      </form>
    </div>
  );
}

export default Form;
