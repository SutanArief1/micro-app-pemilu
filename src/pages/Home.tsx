import Article from "../components/article";
import Banner from "../components/banner";
import MainArticle from "../components/mainArticle";
import Body from "../components/body";
import { dataDummyArticle } from "../mocks/article";
import NavbarUser from "../components/navbar/navbarUser";

function Home() {

  return (
    <>
      <NavbarUser />
      <div className="bg-[#CECECE] px-[150px] py-[45px] flex flex-col gap-10">
        <Banner />
        <div className='flex justify-center'>
          <div className="flex justify-start flex-wrap gap-[5%] h-fit">
            {dataDummyArticle.map((article, index) => {
              if (!index) {
                return <MainArticle {...article} />
              } else {
                return <Article {...article} />
              }
            })}
          </div>
        </div>
      </div>
      <Body />
    </>
  )
}

export default Home