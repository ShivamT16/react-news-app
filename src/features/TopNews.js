import { useEffect, useState } from "react"
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
    const status = useSelector((state) => state.news.status)
    const error = useSelector((state) => state.news.error )
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchTopNews())
    }, [dispatch])

    const newsByCategory = topNews.filter(({category}) => 
        categoryFilter === "All" ? true : category.includes(categoryFilter)
    )

    const handlePage = (selectedPage) => {
           setPage(selectedPage);
    }
   
    const newsBySearch = [...newsByCategory].filter(({title}) => title.toLowerCase().includes(searchFilter.toLowerCase()))
    
    return(
        <div>

        <div className="main" > 

        {status === 'loading' && <h1>Loading...</h1> }
        {error && <h1>Error: {error}</h1> }

        { newsBySearch.length > 0 ?
        newsBySearch.slice(page * 6 -6 , page * 6).map((article) => {
          const {source, title, urlToImage, description } = article;

         return(
        <div key={source.id} className="news-main"> 

        <Link to={`/news/article/${source.id}`} className="link" >
            <p className="main-title"> {title} </p> 
            <img src={urlToImage} alt={title} className="news-image" />
            <p> {source.name} </p>
            <p> {description} </p>
        </Link>

        {favourites.find((news) => news.source.id === source.id) ? <button onClick={() => dispatch(removeFavourite(source.id))} >Unsave</button> : <button onClick={() => dispatch(setFavourites(article))} >Save Article</button> }
        </div> 

        )}) : <h1>| No Article Found</h1>}

        </div>
        
        { page > 1 && <span className="pagination" onClick={() => setPage(page - 1)} >◀️</span>}

        { newsBySearch.length > 0 && [...Array(Math.floor(newsBySearch.length / 5))].map((_,i) => 
        <span key={i} className={ page === i+1 ? "page_selected" : "pagination" } onClick={() => handlePage(i + 1)} > {i + 1}  </span>
        )}

        { page < Math.floor(newsBySearch.length / 5) && <span className="pagination" onClick={() => setPage(page + 1)} >▶️</span> }
        
        </div>
    )
}
