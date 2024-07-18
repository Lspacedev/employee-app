function Dashboard({ employees }) {
  return (
    <div>
      <div>Dashboard</div>
      <div className="boards">
        <div className="number-employees">
          <div className="number-employees-title">Number of employees: </div>
          <div className="number-employees-length">{employees.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
