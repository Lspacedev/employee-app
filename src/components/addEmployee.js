import { useState } from "react";

function AddEmployee({ count, handleAddEmployees }) {
  const [obj, setObj] = useState({});

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const [clicked, setClicked] = useState(false);
  function handleSubmit(id) {
    console.log(id);
    handleAddEmployees(id);
  }
  return (
    <div>
      <button onClick={setClicked(true)}>New Employee</button>
      {clicked ? <div>true</div> : <div>false</div>}
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
