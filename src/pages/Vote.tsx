import profilePicture from '../assets/images/profile-picture1.png'
import InfoPaslon from '../components/carousel'
import PieChart from '../components/chart'
import NavbarUser from '../components/navbar/navbarUser'

function Vote() {

  return (
    <>
      <NavbarUser />
      <div className="bg-[#CECECE] flex flex-col gap-10 font-inter">
        <div className="bg-white p-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">INFO PEMILU TERUPDATE</h1>
          </div>
          <div>
            <div className="flex">
              <div className="flex flex-col basis-1/2 justify-center items-center">
                <h2 className="text-4xl mb-8">Hasil :</h2>
                <div>
                  <PieChart />
                </div>
              </div>
              <div className="basis-1/2 flex flex-col gap-10">
                <div className="w-[657px] h-[120px] border shadow-lg bg-[#FF6384] rounded-lg">
                  <div className="flex p-4 h-[120px] gap-8">
                    <div className="w-[65px] border-2 border-white bg-[#5E0000] rounded-md p-3">
                      <h2 className="text-wrap text-center text-white font-bold text-xs">No. Paslon</h2>
                      <h2 className="text-wrap text-center text-white font-bold text-2xl">1</h2>
                    </div>
                    <div className="text-wrap font-bold text-2xl flex flex-col justify-center">
                      <h1>CINTARA SURYA PALOH</h1>
                      <h1>30%</h1>
                    </div>
                  </div>
                </div>
                <div className="w-[657px] h-[120px] border shadow-lg bg-[#FFCD56] rounded-lg">
                  <div className="flex p-4 h-[120px] gap-8">
                    <div className="w-[65px] border-2 border-white bg-[#5E5400] rounded-md p-3">
                      <h2 className="text-wrap text-center text-white font-bold text-xs">No. Paslon</h2>
                      <h2 className="text-wrap text-center text-white font-bold text-2xl">2</h2>
                    </div>
                    <div className="text-wrap font-bold text-2xl flex flex-col justify-center">
                      <h1>SURYA SURYA</h1>
                      <h1>45%</h1>
                    </div>
                  </div>
                </div>
                <div className="w-[657px] h-[120px] border shadow-lg bg-[#36A2EB] rounded-lg">
                  <div className="flex p-4 h-[120px] gap-8">
                    <div className="w-[65px] border-2 border-white bg-[#005E4D] rounded-md p-3">
                      <h2 className="text-wrap text-center text-white font-bold text-xs">No. Paslon</h2>
                      <h2 className="text-wrap text-center text-white font-bold text-2xl">3</h2>
                    </div>
                    <div className="text-wrap font-bold text-2xl flex flex-col justify-center">
                      <h1>CINTARA</h1>
                      <h1>25%</h1>
                    </div>
                  </div>
                </div>
                <div className="w-[466px] flex justify-center bg-[#5E5A00] p-2 rounded-md">
                  <button className="text-white font-bold">MASUKKAN SUARAMU</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full pt-0 pb-20'>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">INFO PASLON</h1>
          </div>
          <InfoPaslon />
        </div>
        <div className="h-[384px] bg-white flex justify-center items-center">
          <h1 className="font-bold text-4xl text-center w-3/5 text-red-500">PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT</h1>
        </div>
      </div>
    </>
  )
}

export default Vote