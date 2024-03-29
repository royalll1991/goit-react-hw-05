import MoviesList from "../../components/MovieList/MovieList";
import {  trendingMovies } from "../../serch-movies";
import { useEffect, useState } from "react";
import css from "./HomePage.module.css"

function HomePage (){
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState (false);
  
    useEffect(() => {
              async function getData () {
                try { const data = await trendingMovies();
            setMovies(data.results)
            
                } catch (error) {
                    setError(true);
                    
                }
                
    } getData(); }, []);
 

 

    return (<div >
        <h1>Trending today</h1>
        {error? <p>Yuo have a problem, reboot page</p>:
        <ul className={css.film}>
        <MoviesList movies = {movies}/>
        </ul>}
        </div>
    );
}

export default HomePage;