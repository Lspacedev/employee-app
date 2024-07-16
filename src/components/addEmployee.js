import { useState } from "react";
import Form from "./Form";

function AddEmployee({ count, handleAddEmployees }) {
  const [clicked, setClicked] = useState(false);

  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <div>
      <button onClick={toggleClicked}>New Employee</button>
      <div>{count}</div>

      {clicked ? (
        <Form
          handleAddEmployees={handleAddEmployees}
          toggleClicked={toggleClicked}
          count={count}
        />
      ) : (
        <div>false</div>
      )}

      {/*<input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
        value={id}
      />
      <div>{id}</div>
      <button onClick={() => handleSubmit(id)}>Add</button>*/}
    </div>
  );
}

export default AddEmployee;
