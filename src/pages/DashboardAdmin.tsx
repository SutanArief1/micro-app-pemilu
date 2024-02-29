import profilePicture from '../assets/images/profile-picture1.png'

function DashboardAdmin() {

  return (
    <>
      <div className="bg-[#CECECE] gap-10 font-inter">
        <div className="bg-white p-20 px-[150px]">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">DASHBOARD</h1>
          </div>
          <div className="flex flex-wrap gap-[5%]">
            <div className="w-[30%] flex flex-col items-center gap-4">
              <div className="w-[75px] h-[75px] border-4 border-black rounded-full bg-[#FFCD56] flex justify-center items-center" >
                <h4 className="font-bold text-2xl">1</h4>
              </div>
              <div className="w-[367px] bg-[#FFCD56] p-4 flex flex-col rounded-lg">
                <img src={profilePicture} alt="" className='' />
                <h1 className='font-bold text-2xl'>SURYA SURYA</h1>
                <h4 className='font-semibold'>Akumulasi: 45%</h4>
                <h4 className='font-semibold'>Jumlah Vote: 117 Voters</h4>
              </div>
            </div>
            <div className="w-[30%] flex flex-col items-center gap-4">
              <div className="w-[75px] h-[75px] border-4 border-black rounded-full bg-[#56FFF5] flex justify-center items-center" >
                <h4 className="font-bold text-2xl">2</h4>
              </div>
              <div className="w-[367px] bg-[#56FFF5] p-4 flex flex-col rounded-lg">
                <img src={profilePicture} alt="" className='' />
                <h1 className='font-bold text-2xl'>SURYA SURYA</h1>
                <h4 className='font-semibold'>Akumulasi: 45%</h4>
                <h4 className='font-semibold'>Jumlah Vote: 117 Voters</h4>
              </div>
            </div>
            <div className="w-[30%] flex flex-col items-center gap-4">
              <div className="w-[75px] h-[75px] border-4 border-black rounded-full bg-[#FF5656] flex justify-center items-center" >
                <h4 className="font-bold text-2xl">3</h4>
              </div>
              <div className="w-[367px] bg-[#FF5656] p-4 flex flex-col rounded-lg">
                <img src={profilePicture} alt="" className='' />
                <h1 className='font-bold text-2xl'>SURYA SURYA</h1>
                <h4 className='font-semibold'>Akumulasi: 45%</h4>
                <h4 className='font-semibold'>Jumlah Vote: 117 Voters</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='p-28'>
          <div className="flex flex-col items-center text-center p-10">
            <h1 className="text-4xl font-bold text-[#5d5a00]">LIST VOTER</h1>
          </div>
          <div className='flex flex-col gap-10 border border-black'>
            <div className='flex justify-center'>
              <table className="table-auto border-collapse border border-slate-500">
                <thead>
                  <tr>
                    <th className="border border-slate-600 p-3">No</th>
                    <th className="border border-slate-600 p-3 w-[300px]">Nama</th>
                    <th className="border border-slate-600 p-3 w-[500px]">Alamat</th>
                    <th className="border border-slate-600 p-3 w-[200px]">Jenis Kelamin</th>
                    <th className="border border-slate-600 p-3 w-[150px]">Paslon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white'>
                    <td className="border border-slate-700 p-3">1</td>
                    <td className="border border-slate-700 p-3">Sugeng No Pants</td>
                    <td className="border border-slate-700 p-3">Cileungsi</td>
                    <td className="border border-slate-700 p-3">Laki Laki</td>
                    <td className="border border-slate-700 p-3">Paloh</td>
                  </tr>
                  <tr className='bg-white'>
                    <td className="border border-slate-700 p-3">2</td>
                    <td className="border border-slate-700 p-3">Haris Gams</td>
                    <td className="border border-slate-700 p-3">Serang</td>
                    <td className="border border-slate-700 p-3">Perempuan</td>
                    <td className="border border-slate-700 p-3">Surya</td>
                  </tr>
                  <tr className='bg-white'>
                    <td className="border border-slate-700 p-3">3</td>
                    <td className="border border-slate-700 p-3">Aziz Union</td>
                    <td className="border border-slate-700 p-3">Bekasi</td>
                    <td className="border border-slate-700 p-3">Laki Laki</td>
                    <td className="border border-slate-700 p-3">Cintara</td>
                  </tr>
                  <tr className='bg-white'>
                    <td className="border border-slate-700 p-3">4</td>
                    <td className="border border-slate-700 p-3">Lae Tanjung Balai</td>
                    <td className="border border-slate-700 p-3">Tanjung Balai</td>
                    <td className="border border-slate-700 p-3">Laki Laki</td>
                    <td className="border border-slate-700 p-3">Paloh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=''>
              <h2 className='font-bold text-2xl'>TOTAL SUARA TERKUMPUL : 1000 Voters</h2>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin