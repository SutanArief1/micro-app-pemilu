import { NavLink } from "react-router-dom"

function ModalRegister() {

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="bg-white border-2 w-[450px] h-[720px] rounded-xl p-10 flex flex-col overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">REGISTER</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-semibold">Fullname</label>
              <input type="text" id="username" name="username" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">Alamat</label>
              <input type="text" id="password" name="password" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">Jenis Kelamin</label>
              <input type="text" id="password" name="password" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">Username</label>
              <input type="text" id="password" name="password" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">Password</label>
              <input type="text" id="password" name="password" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <button className="bg-[#5E5A00] text-white h-[50px] rounded-lg text-2xl font-bold">SUBMIT</button>
          </div>
          <div className="flex justify-center mt-5">
            <p className="italic">Belum memiliki akun ? <NavLink to="/register" className="underline text-[#0092a6]">Register</NavLink></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalRegister