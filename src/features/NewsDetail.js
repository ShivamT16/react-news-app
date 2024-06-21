import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

export const NewsDetail = () => {
    const {id} = useParams()
    const topNews = useSelector((state) => state.news.news)
    return(
        <div>

        {
        topNews.filter(({source}) => source.id === id).map(({source, author, title, description, url, urlToImage, content, publishedAt, category}) =>
        <div key={source.id} >
            <p className="main-title"> {title} </p> 
            <p> {source.name} | {author} </p>
            <img src={urlToImage} alt={title} className="news-image" />
            <p> {description}{content} </p>
            <Link to={url} target="_blank" > Click to read full article </Link>
        </div>
        )}

        </div>
    )
}