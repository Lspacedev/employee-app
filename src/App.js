import logo from "./logo.svg";
import "./App.css";
import AddEmployee from "./components/addEmployee";
import DisplayEmployees from "./components/displayEmployees";
import { useState } from "react";
import useLocalStorage from "./components/useLocalStorage";
import Sidebar from "./components/sidebar";

function App() {
  const [employees, setEmployees] = useLocalStorage("employees", []);
  const [count, setCount] = useState(0);
  function handleAddEmployees(obj) {
    //find employee
    const filteredEmployee = employees.filter(
      (employee) =>
        employee.id === obj.id ||
        employee.surname === obj.surname ||
        employee.email === obj.email ||
        employee.phone === obj.phone
    );

    console.log("filter", filteredEmployee, obj);

    //if employee doesn't exist add them
    if (filteredEmployee.length === 0) {
      setEmployees((prev) => [...prev, obj]);
    }
  }

  function handleDeleteEmployee(id) {
    const filteredEmployees = employees.filter(
      (employee) => employee.id !== id
    );
    setEmployees(filteredEmployees);
  }

  function handleUpdate(id) {
    const employeesCopy = employees.slice(0);
    let employee = employeesCopy.find((employee) => employee.id === id);
    employee.edit = true;
    console.log("eee", employee, employeesCopy);
    setEmployees(employeesCopy);
  }

  function handleResubmit(id, obj) {
    const employeesCopy = employees.slice(0);
    let employee = employeesCopy.find((employee) => employee.id === id);
    if (obj.name) {
      employee.name = obj.name;
    }
    if (obj.surname) {
      employee.surname = obj.surname;
    }
    if (obj.position) {
      employee.position = obj.position;
    }
    if (obj.department) {
      employee.department = obj.department;
    }
    if (obj.email) {
      employee.email = obj.email;
    }
    if (obj.phone) {
      employee.phone = obj.phone;
    }

    employee.edit = false;
    console.log("e00", employee, employeesCopy);
    setEmployees(employeesCopy);
  }

  console.dir(employees);
  return (
    <div className="App">
      <AddEmployee handleAddEmployees={handleAddEmployees} />
      <Sidebar />
      <DisplayEmployees
        employees={employees}
        handleDeleteEmployee={handleDeleteEmployee}
        handleUpdate={handleUpdate}
        handleResubmit={handleResubmit}
      />
    </div>
  );
}

export default App;
