import logo from "@assets/images/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalLogin from "../modalLogin";
import ModalRegister from "../modalRegister";

function NavbarAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [showModalRegister, setShowModalRegister] = useState(false)

  const handlerShowModal = () => { setShowModal(true) }
  const handlerRegistrationClicked = () => {
    setShowModalRegister(true)
    setShowModal(false)
  }

  return (
    <>
      <div className="flex justify-between px-[150px] py-4 bg-black">
        <NavLink to="/dashboard-admin">
          <div className="flex text-white items-center gap-x-5">
            <div>
              <img src={logo} className="w-10 h-10" />
            </div>
            <div className="font-bold">
              <p>PEMILU PRESIDEN DUMBWAYS.ID</p>
            </div>
          </div>
        </NavLink>
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
            </ul>
          </div>
          <div>
            <button onClick={handlerShowModal} className="bg-white text-black px-5 py-2 rounded font-bold">
              LOGIN
            </button>
          </div>
        </div>
      </div>
      {
        showModal && <ModalLogin onClose={() => (setShowModal(false))} onRegistrationClicked={handlerRegistrationClicked} />
      }
      {
        showModalRegister && <ModalRegister onClose={() => (setShowModalRegister(false))} />
      }
    </>
  )

}

export default NavbarAdmin;