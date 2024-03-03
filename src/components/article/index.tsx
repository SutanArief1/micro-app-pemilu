import { NavLink } from "react-router-dom"

export interface IDataDummyArticle {
  id: number,
  image: string,
  date: string,
  title: string,
  author: string
}


function Article({ id, image, date, title, author }: IDataDummyArticle) {

  return (
    <>
      <div className="w-[30%] h-[450px] rounded overflow-hidden">
        <NavLink to="/detail-article">
          <img className="w-full" src={image} alt="thumbnail" />
          <div className="px-3 py-4 bg-white">
            <span className="inline-block bg-[#FF0000] rounded-md px-3 py-1 text-xl font-bold text-white mr-2 mb-2">{date}</span>
            <h1 className="font-bold text-3xl mb-0 font-inter w-3/4">{title}</h1>
            <p className="text-gray-700 text-2xl">
              {author}
            </p>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default Article