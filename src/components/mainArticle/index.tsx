import { NavLink } from "react-router-dom"
import { IDataDummyArticle } from "../article"

function MainArticle({ id, image, date, title, author }: IDataDummyArticle) {

  return (
    <>
      <div className='relative w-[65%] mb-10'>
        <NavLink to="/detail-article">
          <div className="">
            <img src={image} alt="main-thumbnail" className="w-full h-full" />
          </div>
          <div className="absolute left-4 bottom-4">
            <span className="inline-block bg-[#FF0000] rounded-md px-3 py-1 text-xl font-bold text-white mr-2 mb-2">{date}</span>
            <h1 className="font-bold text-3xl mb-0 font-inter w-3/4 text-white">{title}</h1>
            <p className="text-2xl text-white">
              {author}
            </p>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default MainArticle