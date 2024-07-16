import logo from "./logo.svg";
import "./App.css";
import AddEmployee from "./components/addEmployee";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [count, setCount] = useState(0);
  function handleAddEmployees(obj) {
    //find employee
    const filteredEmployee = employees.filter(
      (employee) =>
        employee.id === obj.id ||
        (employee.name === obj.name && employee.surname === obj.surname) ||
        employee.email === obj.email ||
        employee.phone === obj.phone,
    );

    console.log(filteredEmployee, obj);

    //if employee doesn't exist add them
    if (filteredEmployee.length === 0) {
      //obj.id = count;
      setEmployees((prev) => [...prev, obj]);
      setCount(count + 1);
    }
  }

  console.dir(employees);
  return (
    <div className="App">
      <AddEmployee count={count} handleAddEmployees={handleAddEmployees} />
    </div>
  );
}

export default App;
