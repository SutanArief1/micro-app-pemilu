import { ChangeEvent, FormEvent, useState } from "react"
import { NavLink } from "react-router-dom"
import Modal from "../modal"

interface IModalRegisterProps {
  onClose: () => void
}

interface IRegister {
  fullname: string
  address: string
  gender: string
  username: string
  password: string
}

function ModalRegister({ onClose }: IModalRegisterProps) {

  const [formRegister, setFormRegister] = useState<IRegister>({
    fullname: "",
    address: "",
    gender: "",
    username: "",
    password: ""
  })

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormRegister(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      const config = {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formRegister)
      }

      const response = await fetch("http://localhost:3000/api/v1/user", config)

      console.log(response);

    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <Modal onClose={onClose}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">REGISTER</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="fullname" className="font-semibold">Fullname</label>
              <input onChange={handleOnChange} type="text" id="fullname" name="fullname" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="font-semibold">Alamat</label>
              <input onChange={handleOnChange} type="text" id="address" name="address" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="gender" className="font-semibold">Jenis Kelamin</label>
              <input onChange={handleOnChange} type="text" id="gender" name="gender" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="font-semibold">Username</label>
              <input onChange={handleOnChange} type="text" id="username" name="username" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-semibold">Password</label>
              <input onChange={handleOnChange} type="password" id="password" name="password" className="border-2 border-black h-11 rounded-lg" />
            </div>
            <button className="bg-[#5E5A00] text-white h-[50px] rounded-lg text-2xl font-bold">SUBMIT</button>
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <p className="italic">Belum memiliki akun ? <NavLink to="/register" className="underline text-[#0092a6]">Register</NavLink></p>
        </div>
      </Modal>
    </>
  )
}

export default ModalRegister