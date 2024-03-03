import logo from "@assets/images/logo.png";
import { NavLink } from "react-router-dom";

function NavbarUser() {

  return (
    <>
      <div className="flex justify-between px-[150px] py-4 bg-black">
        <div className="flex text-white items-center gap-x-5">
          <div>
            <img src={logo} className="w-10 h-10" />
          </div>
          <div className="font-bold">
            <p>PEMILU PRESIDEN DUMBWAYS.ID</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div>
            <ul className="flex text-white gap-x-5">
              <NavLink to='/list-partai'>
                <li>Partai</li>
              </NavLink>
              <li>|</li>
              <NavLink to="/list-paslon">
                <li>Paslon</li>
              </NavLink>
              <li>|</li>
              <NavLink to="/vote">
                <li>Voting</li>
              </NavLink>
            </ul>
          </div>
          <div>
            <NavLink to="/login">
              <button className="bg-white text-black px-5 py-2 rounded font-bold">
                LOGIN
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )

}

export default NavbarUser;