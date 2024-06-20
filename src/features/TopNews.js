import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopNews } from "./newsSlice"
import "./topNews.css"

export const TopNews = () => {

    const dispatch = useDispatch()
    const topNews = useSelector((state) => state.news.news)
    const categoryFilter = useSelector((state) => state.news.filterByCategory)
    const searchFilter = useSelector((state) => state.news.searchFilter)

    useEffect(() => {
        dispatch(fetchTopNews())
    }, [dispatch])

    const newsByCategory = topNews.filter(({category}) => 
        categoryFilter === "All" ? true : category.includes(categoryFilter)
    )
   
    const newsBySearch = [...newsByCategory].filter(({title}) => title.toLowerCase().includes(searchFilter.toLowerCase()))

    return(
        <div className="main">    
        {
        newsBySearch.map(({source, author, title, description, url, urlToImage, content, publishedAt, category}) =>
        <div key={source.id} className="news-main">
            <p className="main-title"> {title} </p> 
            <img src={urlToImage} alt={title} className="news-image" />
            <p> {source.name} </p> 
        </div>
        ) }
        </div>
    )
}
