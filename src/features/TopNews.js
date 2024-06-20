import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopNews, removeFavourite, setFavourites } from "./newsSlice"
import "./topNews.css"
import { Link } from "react-router-dom"

export const TopNews = () => {

    const dispatch = useDispatch()
    const topNews = useSelector((state) => state.news.news)
    const categoryFilter = useSelector((state) => state.news.filterByCategory)
    const searchFilter = useSelector((state) => state.news.searchFilter)
    const favourites = useSelector((state) => state.news.favourites )

    useEffect(() => {
        dispatch(fetchTopNews())
    }, [dispatch])

    const newsByCategory = topNews.filter(({category}) => 
        categoryFilter === "All" ? true : category.includes(categoryFilter)
    )
   
    const newsBySearch = [...newsByCategory].filter(({title}) => title.toLowerCase().includes(searchFilter.toLowerCase()))
    // console.log(favourites)
    return(
        <div className="main">    
        {
        newsBySearch.map((article) => {
          const {source, title, urlToImage, publishedAt} = article;

         return(
        <div key={source.id} className="news-main"> 

        <Link to={`/news/article/${source.id}`} >
            <p className="main-title"> {title} </p> 
            <img src={urlToImage} alt={title} className="news-image" />
            <p> {source.name} </p>
        </Link>

        {favourites.find((news) => news.source.id === source.id) ? <button onClick={() => dispatch(removeFavourite(source.id))} >Unsave</button> : <button onClick={() => dispatch(setFavourites(article))} >Save</button> }

        </div>
        ) } ) }
        </div>
    )
}
