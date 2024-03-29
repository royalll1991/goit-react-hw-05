import { Link, useLocation } from "react-router-dom";
import css from './MoviesList.module.css'



function MoviesList ({movies}) {
    const location = useLocation();
    
return(<>

    {movies.map((movie) =>(
    <li key = {movie.id} className={css.list}>
        <Link to={`/movies/${movie.id}`} state={location}>
     <div><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} /></div>
<h3>{movie.title}</h3>
<p>rating {movie.vote_average}</p>
</Link>
    </li>) )} 
 
</>
);
}
export default MoviesList;