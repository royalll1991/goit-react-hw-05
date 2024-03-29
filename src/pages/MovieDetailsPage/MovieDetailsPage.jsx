import { useEffect, useRef, useState } from "react";
import { getMovieById } from "../../serch-movies";
import { useParams,NavLink,Outlet} from "react-router-dom";
import { Suspense } from 'react';
import { Link, useLocation } from "react-router-dom";
import css from './MovieDetailsPage.module.css'

function MovieDetailsPage () {
    const {movieId} = useParams();
    const [card, setCard] = useState([]);
 const [error, setError] = useState (false);
 
 const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/')


 useEffect(() => {
        async function getCard () {
          try { const data = await getMovieById(movieId);
      setCard(data);
      
          } catch (error) {
              setError(true)
              
          }
          
} getCard(); }, [movieId]);


    return( <>   <Link to = {backLinkRef.current}> <button className={css.button}> Go back</button></Link>
        {error ? <p>Yuo have a problem, reboot page</p>:<div className={css.box}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`} alt={card.original_title} />
            <div>
                <h2>{card.original_title}</h2>
                <p>Usser score: {card.vote_average}%</p>
                <h4>Overview</h4>
                <p>{card.overview}</p>
                {card.genres && (
  <>
    <h5>Genres</h5>
    <div>
      {card.genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  </>
)}
            </div>
        </div>}
        <div className={css.boxList}>
            <p>Edditional information</p>
            <ul className={css.list}>
                <li>
                <NavLink to= "cast">Cast</NavLink>
                    </li>
                <li>  
                     <NavLink to= "reviews">Reviews</NavLink>
                     </li>
            </ul>
            <Suspense fallback = {null}>
            <Outlet/>
            </Suspense>
        </div>
        </>
    );
}

export default MovieDetailsPage;