import profilePicture from "../../assets/images/profile-picture1.png"
import Slider from "react-slick"

function InfoPaslon() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="w-3/5">
        <Slider {...settings}>
          <div>

            <div className="h-[494px] flex gap-5 items-center bg-white p-5 shadow-xl">
              <div>
                <img src={profilePicture} alt="profile-picture-paslon-1" />
              </div>
              <div className='font-medium'>
                <h4 className='font-bold'>Nomor Urut : 1</h4>
                <h1 className='mb-4 font-bold text-[#5E0000] text-2xl'>CINTARA SURYA PALOH</h1>
                <h4>Visi & Misi :</h4>
                <ul className="list-disc list-inside mb-5">
                  <li>Memindahkan Indonesia ke Isekai.</li>
                  <li>Nonton anime 3x sehari.</li>
                  <li>Melakukan peresapan pada budaya jepang.</li>
                </ul>
                <h4>Koalisi :</h4>
                <ul className="list-disc list-inside mb-5">
                  <li>Partai Persatuan Wiboo.</li>
                  <li>Partai Redbull.</li>
                  <li>Partai Black Magic.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[494px] flex gap-5 items-center bg-white p-5 shadow-xl">
              <div>
                <img src={profilePicture} alt="profile-picture-paslon-1" />
              </div>
              <div className='font-medium'>
                <h4 className='font-bold'>Nomor Urut : 1</h4>
                <h1 className='mb-4 font-bold text-[#5E0000] text-2xl'>CINTARA SURYA PALOH</h1>
                <h4>Visi & Misi :</h4>
                <ul className="list-disc list-inside mb-5">
                  <li>Memindahkan Indonesia ke Isekai.</li>
                  <li>Nonton anime 3x sehari.</li>
                  <li>Melakukan peresapan pada budaya jepang.</li>
                </ul>
                <h4>Koalisi :</h4>
                <ul className="list-disc list-inside mb-5">
                  <li>Partai Persatuan Wiboo.</li>
                  <li>Partai Redbull.</li>
                  <li>Partai Black Magic.</li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default InfoPaslon