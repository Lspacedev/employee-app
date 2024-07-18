import { IoPersonOutline } from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";

function Sidebar({ handlePageChange }) {
  return (
    <div className="Sidebar">
      <div onClick={() => handlePageChange("dashboard-page")}>
        <RiDashboardLine />
        Dashboard
      </div>
      <div onClick={() => handlePageChange("employees-page")}>
        <IoPersonOutline /> Employees
      </div>
    </div>
  );
}

export default Sidebar;
