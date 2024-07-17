import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Employee({ name, surname, position, department, email, phone, pic }) {
  return (
    <div className="Employee">
      <div className="profile-name">
        <div className="profile-pic">
          {pic && (
            <img src={require(`./${pic.replace("C:\\fakepath\\", "")}`)} />
          )}
        </div>
        <div className="name">
          <div>{name + " " + surname}</div>
          <div className="position">{position}</div>
        </div>
      </div>
      <div className="department-date">
        <div className="department">
          <p>Departement</p>
          <p className="department-value">{department}</p>
        </div>
        <div className="date">
          <p>Date</p>
          <p className="department-value">{department}</p>
        </div>
      </div>
      <div className="email-phone">
        <div className="email">
          <MdOutlineEmail />
          {email}
        </div>
        <div className="phone">
          <FaPhone />
          {phone}
        </div>
      </div>
    </div>
  );
}

export default Employee;
