import profilePicture from "../assets/images/profile-picture1.png";

function AddPaslon() {

  return (
    <>
      <div className="p-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">ADD PASLON</h1>
        </div>
        <div className="flex justify-center gap-10">
          <div className="">
            <img src={profilePicture} alt="profile-picture" className="w-[368px] h-[523px]" />
          </div>
          <div className="font-bold">
            <form action="" className="flex flex-col gap-1">
              <label htmlFor="name">Nama</label>
              <input type="text" className="border-2 border-black rounded-lg mb-4 w-[580px] h-[70px]" />
              <label htmlFor="name">Nomor Urut</label>
              <input type="text" className="border-2 border-black rounded-lg mb-4 w-[580px] h-[70px]" />
              <label htmlFor="name">Visi Misi</label>
              <input type="text" className="border-2 border-black resize-none rounded-lg mb-4 w-[580px] h-[249px]"></input>
              <button className="bg-[#5E5A00] text-white w-[70%] h-[50px] rounded-lg text-2xl font-bold">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPaslon