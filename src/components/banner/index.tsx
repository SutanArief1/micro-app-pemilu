import branded from "@assets/images/brandred 1.png"
import logoPemilu from "@assets/images/logo-pemilu.png"

function Banner() {

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-r from-secondary from-0% to-primary to-50% w-screen flex flex-row pb-[32px] rounded-3xl">
          <div className="flex flex-col justify-between">
            <img src={branded} alt="logo-dumbways" className="w-[342px] h-[237px] opacity-[70%]" />
            <div className="text-white font-bold px-[32px]">
              <h1 className="text-[64px] leading-[77.45px]">SELAMAT DATANG</h1>
              <p className="text-[24px] leading-[29.05px]">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR</p>
              <p className="text-[24px] leading-[29.05px]">DIPILIH MELALUI SEBUAH ARTI NAMA</p>
            </div>
          </div>
          <div className="flex flex-grow m-auto justify-center">
            <img src={logoPemilu} alt="logo-pemilu" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner