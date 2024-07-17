import { useState } from "react";
import Form from "./Form";
import { IoIosSearch } from "react-icons/io";

function AddEmployee({ count, handleAddEmployees }) {
  const [clicked, setClicked] = useState(false);

  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <div className="Add">
      <div className="Add-div">
        <div className="logo">Employee App</div>
        <div className="search-div">
          <IoIosSearch
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontSize: "1.6rem",
              marginRight: "0px",
            }}
          />
          <input type="search" />
        </div>
        <button onClick={toggleClicked}>New Employee</button>
      </div>
      {clicked && (
        <Form
          handleAddEmployees={handleAddEmployees}
          toggleClicked={toggleClicked}
          count={count}
        />
      )}
    </div>
  );
}

export default AddEmployee;
