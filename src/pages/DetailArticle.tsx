import { NavLink } from 'react-router-dom'
import thumbnail from '../assets/images/thumbnail.png'
import NavbarUser from '../components/navbar/navbarUser'

function DetailArticle() {

  return (
    <>
      <NavbarUser />
      <div className="bg-[#CECECE] px-[150px] flex flex-col gap-10 font-inter">
        <div className="bg-white p-7">
          <div className="flex justify-between mb-10">
            <NavLink to="/home">
              <button className="font-semibold">←  Beranda</button>
            </NavLink>
            <h2 className="flex-1 text-center font-semibold">BERITA HARI INI</h2>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-[#5d5a00]">KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK</h1>
            <h4 className="text-2xl font-semibold">Super Admin</h4>
            <h4 className="text-2xl font-semibold">Senin, 03 Jan 2023</h4>
          </div>
          <div className='flex justify-center py-10'>
            <img src={thumbnail} alt="thumbnail" className='w-full' />
          </div>
          <div className='text-justify'>
            <p className='font-semibold'>Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti. Sed interdum, lacus ac ultrices facilisis, ligula enim pellentesque elit, vel varius nisi odio at purus. Sed suscipit purus quis tortor posuere, in varius est euismod. Mauris aliquam urna non elit faucibus, eu fermentum turpis mattis. Quisque vel nisl vitae sapien congue dapibus. Vivamus auctor, velit ut condimentum bibendum, purus lacus scelerisque ligula, nec gravida arcu velit id libero. In hac habitasse platea dictumst.</p>
            <p className='mt-4 font-semibold'>Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non efficitur sapien scelerisque et. Maecenas facilisis eros id enim tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada mi, vitae convallis libero. In hac habitasse platea dictumst. Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer vitae ex ac libero fermentum volutpat ut vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt varius vel sit amet nunc. Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit. Integer euismod, purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.</p>
            <p className='mt-4 font-semibold'>Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam fermentum, felis ac bibendum malesuada, lectus felis fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel turpis eu purus fermentum tincidunt a vel elit. Phasellus efficitur sapien vel efficitur rhoncus. Integer vel risus ut neque elementum gravida. Morbi rhoncus, ligula nec posuere tristique, ligula lacus dapibus urna, a lacinia sem metus id libero. Suspendisse luctus ligula eu mauris auctor, non semper elit feugiat.</p>
            <p className='mt-4 mb-14 font-semibold'>Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailArticle