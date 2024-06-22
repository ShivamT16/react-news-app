import { useDispatch, useSelector } from "react-redux"
import { setFilterCategory, setSearchFilter } from "./features/newsSlice"
import { Link } from "react-router-dom"

export const NavigationBar = () => {

    const dispatch = useDispatch()
    const categoryFilter = useSelector((state) => state.news.filterByCategory)

    const handleChange = (e) => {
        dispatch(setFilterCategory(e.target.value))
       }

    const handleSearch = (e) => {
        dispatch(setSearchFilter(e.target.value))
    }

    return(
        <div className="navbar">
        
        <Link className="nav-link" to="/" > {categoryFilter === "All" ? "Today's" : categoryFilter} News</Link>

        <input className="input" type="text" onChange={handleSearch} placeholder={`Search ${categoryFilter === "All" ? "Today's" : categoryFilter} News...`} />

            <select className="category-input" onChange={handleChange}>
                <option>All</option>
                <option>National</option>
                <option>Business</option>
                <option>Technology</option>
                <option>Health</option>
                <option>Sports</option>
            </select>
        <Link className="nav-link" to="/news/favourites" >Saved Articles</Link>

        </div>
    )
}