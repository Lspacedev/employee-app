import { IoPersonOutline } from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="logo">Employee App</div>
      <div>
        <RiDashboardLine />
        Dashboard
      </div>
      <div>
        <IoPersonOutline /> Employees
      </div>
    </div>
  );
}

export default Sidebar;
