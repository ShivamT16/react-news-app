import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite } from "./newsSlice";
import "./topNews.css"

export const Favourites = () => {
    const dispatch = useDispatch()
    const favourites = useSelector((state) => state.news.favourites )

    return(

        <div className="main">

            { favourites.length > 0 ?
        favourites.map((article) => {

        const {source, title, urlToImage, description} = article;

        return(

        <div key={source.id} className="news-main"> 

        <Link to={`/news/article/${source.id}`} className="link" >
            <p className="main-title"> {title} </p> 
            <img src={urlToImage} alt={title} className="news-image" />
            <p> {source.name} </p>
            <p> {description} </p>
        </Link>

        <button onClick={() => dispatch(removeFavourite(source.id))} >Unsave</button>
        </div>
        ) } ) : <h1>No Saved Articles </h1> }
        </div>
    )
}