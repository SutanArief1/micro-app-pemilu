import profilePicture from '../../assets/images/profile-picture1.png'

function ModalVote() {

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="bg-white w-[1140px] h-[740px] border-2 rounded-xl p-10 flex flex-col overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">MASUKAN PILIHAN MU</h1>
          </div>
          <div className="flex gap-[5%]">
            <div className="w-[30%] h-[420px] bg-[#FCFF63] rounded-2xl shadow-lg flex flex-col justify-center p-5 relative">
              <div>
                <div className="absolute top-0 right-0 w-[90px] h-[90px] bg-[#FF6384] rounded-full outline outline-white flex justify-center items-center">
                  <h2 className="font-bold text-3xl text-white">1</h2>
                </div>
                <div>
                  <img src={profilePicture} alt="profile-picture" className="w-[100%] h-[210px]" />
                  <h1 className="font-bold text-xl">CINTARA SURYA PALOH</h1>
                  <h4 className="mb-2">Memindahkan Indonesia ke Isekai</h4>
                  <h4 className="font-bold">Partai Pengusung :</h4>
                  <ul className="list-disc list-outside pl-7">
                    <li>Partai persatuan monyet</li>
                    <li>Partai sapi perah indonesia</li>
                    <li>Partai pisang masak</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[30%] h-[420px] bg-[#E3E3E3] rounded-2xl shadow-lg flex flex-col justify-center p-5 relative">
              <div>
                <div className="absolute top-0 right-0 w-[90px] h-[90px] bg-[#A9A9A9] rounded-full outline outline-white flex justify-center items-center">
                  <h2 className="font-bold text-3xl text-white">2</h2>
                </div>
                <div>
                  <img src={profilePicture} alt="profile-picture" className="w-[100%] h-[210px]" />
                  <h1 className="font-bold text-xl">CINTARA SURYA PALOH</h1>
                  <h4 className="mb-2">Memindahkan Indonesia ke Isekai</h4>
                  <h4 className="font-bold">Partai Pengusung :</h4>
                  <ul className="list-disc list-outside pl-7">
                    <li>Partai persatuan monyet</li>
                    <li>Partai sapi perah indonesia</li>
                    <li>Partai pisang masak</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[30%] h-[420px] bg-[#E3E3E3] rounded-2xl shadow-lg flex flex-col justify-center p-5 relative">
              <div>
                <div className="absolute top-0 right-0 w-[90px] h-[90px] bg-[#A9A9A9] rounded-full outline outline-white flex justify-center items-center">
                  <h2 className="font-bold text-3xl text-white">3</h2>
                </div>
                <div>
                  <img src={profilePicture} alt="profile-picture" className="w-[100%] h-[210px]" />
                  <h1 className="font-bold text-xl">CINTARA SURYA PALOH</h1>
                  <h4 className="mb-2">Memindahkan Indonesia ke Isekai</h4>
                  <h4 className="font-bold">Partai Pengusung :</h4>
                  <ul className="list-disc list-outside pl-7">
                    <li>Partai persatuan monyet</li>
                    <li>Partai sapi perah indonesia</li>
                    <li>Partai pisang masak</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-10 mt-10">
            <button className="w-[40%] h-[50px] text-[#5E5A00] border-4 border-[#5E5A00] rounded-lg font-bold text-xl">RESET</button>
            <button className="w-[40%] h-[50px] bg-[#5E5A00] text-white rounded-lg font-bold text-xl">SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalVote