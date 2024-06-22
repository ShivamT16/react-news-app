import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import "./newsDetail.css"

export const NewsDetail = () => {
    const {id} = useParams()
    const topNews = useSelector((state) => state.news.news)

    return(
        <div className="detail-main">

        {
        topNews.filter(({source}) => source.id === id).map(({source, author, title, description, url, urlToImage, content }) =>
        <div key={source.id} >
            <h2> {title} </h2> 
            <h3> By- {author} </h3>
            <img src={urlToImage} alt={title} />
            <p> {description}{content} </p>

            <Link className="detail-link" to={url} target="_blank" > Click to read full article </Link>
            <Link className="detail-link" to="/" >Return to Home</Link>
        </div>
        )}

        </div>
    )
}