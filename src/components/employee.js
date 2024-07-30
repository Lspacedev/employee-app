import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Employee({
  name,
  surname,
  position,
  department,
  email,
  phone,
  pic,
  date,
  id,
}) {
  return (
    <div className="Employee">
      <div className="profile-name">
        <div className="profile-pic">{pic && <img src={pic} />}</div>
        <div className="name">
          <div>{name + " " + surname}</div>
          <div className="position">{position}</div>
        </div>
      </div>
      <div className="id-div">
        <div className="id">ID Number</div>
        <div className="id-value">{id}</div>
      </div>
      <div className="department-date">
        <div className="department">
          <p>Department</p>
          <p className="department-value">{department}</p>
        </div>
        <div className="date">
          <p>Date</p>
          <p className="date-value">{date}</p>
        </div>
      </div>
      <div className="email-phone">
        <div className="email">
          <MdOutlineEmail style={{ paddingRight: "5px" }} />
          {email}
        </div>
        <div className="phone">
          <FaPhone style={{ paddingRight: "5px" }} />
          {phone}
        </div>
      </div>
    </div>
  );
}

export default Employee;
