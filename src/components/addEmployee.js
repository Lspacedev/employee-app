import { useState } from "react";

function AddEmployee({ handleAddEmployees }) {
  const [id, setId] = useState("");
  function handleSubmit(id) {
    console.log(id);
    handleAddEmployees(id);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
        value={id}
      />
      <div>{id}</div>
      <button onClick={() => handleSubmit(id)}>Add</button>
    </div>
  );
}

export default AddEmployee;
