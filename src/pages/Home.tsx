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
        <div className='flex flex-wrap mb-2 gap-5'>
          {dataDummyArticle.map((article, index) => {
            if (!index) {
              return <MainArticle {...article} />
            } else {
              return <Article {...article} />
            }
          })}
        </div>
      </div>
      <Body />
    </>
  )
}

export default Home