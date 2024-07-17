function Employee({ name, surname, position, department, email, phone, pic }) {
  return (
    <div className="Employee">
      <div>{name}</div>
      <div>{surname}</div>
      <div>{position}</div>
      <div>{department}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div className="profile-pic">
        {pic && <img src={require(`./${pic.replace("C:\\fakepath\\", "")}`)} />}
      </div>
    </div>
  );
}

export default Employee;
