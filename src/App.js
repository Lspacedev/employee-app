import logo from "./logo.svg";
import "./App.css";
import AddEmployee from "./components/addEmployee";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  function handleAddEmployees(id) {
    //find employee
    const filteredEmployee = employees.filter((employee) => employee.id === id);

    //if employee doesn't exist add them
    if (filteredEmployee.length === 0) {
      setEmployees((prev) => [...prev, { id: id }]);
    }
  }

  console.log(employees);
  return (
    <div className="App">
      <AddEmployee handleAddEmployees={handleAddEmployees} />
    </div>
  );
}

export default App;
