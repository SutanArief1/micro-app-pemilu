import { Carousel } from "react-responsive-carousel";
import profilePicture from "../../assets/images/profile-picture1.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slider from "react-slick"

function InfoPaslon() {
  const settings = {

  };

  return (
    <>
      <div className="w-3/5">
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          thumbWidth={500}
        >
          <div className="">
            <div className="mx-32 h-[494px] flex gap-5 items-center bg-white p-5 shadow-xl">
              <div>
                <img src={profilePicture} alt="profile-picture-paslon-1" />
              </div>
              <div className='font-medium text-left'>
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
          <div className="">
            <div className="mx-32 h-[494px] flex gap-5 items-center bg-white p-5 shadow-xl">
              <div>
                <img src={profilePicture} alt="profile-picture-paslon-1" />
              </div>
              <div className='font-medium text-left'>
                <h4 className='font-bold'>Nomor Urut : 2</h4>
                <h1 className='mb-4 font-bold text-[#5E0000] text-2xl'>SURYA SURYA</h1>
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
          <div className="">
            <div className="mx-32 h-[494px] flex gap-5 items-center bg-white p-5 shadow-xl">
              <div>
                <img src={profilePicture} alt="profile-picture-paslon-1" />
              </div>
              <div className='font-medium text-left'>
                <h4 className='font-bold'>Nomor Urut : 3</h4>
                <h1 className='mb-4 font-bold text-[#5E0000] text-2xl'>CINTARA</h1>
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
        </Carousel>
        {/* <Slider {...settings}>
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
                <h4 className='font-bold'>Nomor Urut : 2</h4>
                <h1 className='mb-4 font-bold text-[#5E0000] text-2xl'>SURYA SURYA</h1>
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
        </Slider> */}
      </div>
    </>
  )
}

export default InfoPaslon