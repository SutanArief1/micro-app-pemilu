import logo from '@assets/images/logo.png'

function Footer() {

  return (
    <>
      <div className="bg-black">
        <div className='flex p-20 gap-4'>
          <img src={logo} alt="logo-dumbways" />
          <div className='flex flex-col justify-center w-[373px]'>
            <h4 className='text-white text-2xl font-bold'>DUMBWAYS.ID</h4>
            <h4 className='text-[#B6B6B6]'>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</h4>
          </div>
        </div>
        <div className="border-t-4 border-white"></div>
        <div>
          <h2 className='text-white font-medium flex justify-center p-4'>Komisi Pemilihan Umum DumbWays.ID | Sutan Arief 2024</h2>
        </div>
      </div>
    </>
  )
}

export default Footer