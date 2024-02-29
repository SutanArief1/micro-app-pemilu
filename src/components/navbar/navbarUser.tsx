import { useEffect, useState } from "react";
import logo from "@assets/images/logo.png";

function NavbarUser() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    console.log(`status login: `, isLogin);
  }, [isLogin])

  const isLoggedIn = () => {
    if (!isLogin) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }

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
              <li>Partai</li>
              <li>|</li>
              <li>Paslon</li>
              <li>|</li>
              <li>Voting</li>
            </ul>
          </div>
          <div>
            {isLogin
              ?
              <button
                className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center font-bold" onClick={isLoggedIn}>
                S
              </button>
              :
              <button
                className="bg-white text-black px-5 py-2 rounded font-bold" onClick={isLoggedIn}>
                LOGIN
              </button>
            }
          </div>
        </div>
      </div>
    </>
  )

}

export default NavbarUser;