import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite } from "./newsSlice";
import "./topNews.css"

export const Favourites = () => {
    const dispatch = useDispatch()
    const favourites = useSelector((state) => state.news.favourites )

    return(
        <div className="main">
            {
        favourites.map((article) => {

        const {source, title, urlToImage} = article;

         return(
        <div key={source.id} className="news-main"> 

        <Link to={`/news/article/${source.id}`} >
            <p className="main-title"> {title} </p> 
            <img src={urlToImage} alt={title} className="news-image" />
            <p> {source.name} </p>
        </Link>

        <button onClick={() => dispatch(removeFavourite(source.id))} >Unsave</button>

        </div>
        ) } ) }
        </div>
    )
}