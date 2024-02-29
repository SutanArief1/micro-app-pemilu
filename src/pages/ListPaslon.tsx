import profilePicture from '../assets/images/profile-picture1.png'

function ListPaslon() {

  return (
    <>
      <div className="p-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">LIST PASLON</h1>
        </div>
        <div className="flex justify-center">
          <table className="table-auto border-collapse border border-slate-500">
            <thead>
              <tr className="bg-[#E5E5E5]">
                <th className="border border-slate-600">No. Urut</th>
                <th className="border border-slate-600">Image</th>
                <th className="border border-slate-600">Name</th>
                <th className="border border-slate-600">Visi & Misi</th>
                <th className="border border-slate-600">Koalisi</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white'>
                <td className="border border-slate-700 p-3">1</td>
                <td className="border border-slate-700 p-3">
                  <img src={profilePicture} alt="" className='w-[78px] h-[94px]' />
                </td>
                <td className="border border-slate-700 p-3">Cintara surya paloh</td>
                <td className="border border-slate-700 p-3">
                  <ul className="list-disc list-inside">
                    <li>Memindahkan Indonesia ke Isekai.</li>
                    <li>Nonton anime 3x sehari.</li>
                    <li>Melakukan peresapan pada budaya jepang.</li>
                  </ul>
                </td>
                <td className="border border-slate-700 p-3">
                  <ul className="list-disc list-inside">
                    <li>Partai Persatuan Wiboo.</li>
                    <li>Partai Redbull.</li>
                    <li>Partai Black Magic.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListPaslon