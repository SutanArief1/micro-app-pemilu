import { ChangeEvent, FormEvent, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { dataDummyUsers } from "../../mocks/users"

function ModalLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginAdmin, setIsLoginAdmin] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = dataDummyUsers.find(user => user.username === username && user.password === password)
    if (user) {
      if (user.username === 'admin' && user.password === 'admin') {
        setIsLoginAdmin(true)
        navigate('/dashboard-admin');
      } else {
        setIsLogin(true)
        navigate('/home');
      }
    } else {
      console.error("Invalid username or password");
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="bg-white border-2 w-[450px] h-[500px] rounded-xl p-10 flex flex-col overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">LOGIN</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="username" className="font-semibold">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} className="border-2 border-black h-11 rounded-lg" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-semibold">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="border-2 border-black h-11 rounded-lg" />
              </div>
              <button type="submit" className="bg-[#5E5A00] text-white h-[50px] rounded-lg text-2xl font-bold">SUBMIT</button>
            </div>
          </form>
          <div className="flex justify-center mt-5">
            <p className="italic">Belum memiliki akun ? <NavLink to="/register" className="underline text-[#0092a6]">Register</NavLink></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalLogin