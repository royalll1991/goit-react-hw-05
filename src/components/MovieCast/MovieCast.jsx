import { useState,useEffect } from "react";
import { getCast } from "../../serch-movies";
import { useParams } from "react-router-dom";

function MovieCast () {
    const {movieId} = useParams();
    const [casts, setCast] = useState([]);
    const [error, setError] = useState (false);

    useEffect(() => {
        async function getCastId() {
          try { const data = await getCast(movieId);
      setCast(data.cast);
      
          } catch (error) {
              setError(true)
              
          }
          
} getCastId(); }, [movieId]);
console.log(casts)

    return(<>
        {error ? <p>Yuo have a problem, reboot page</p>
        : <ul>
          {casts.map((cast) =>(
          <li key = {cast.id}>
        <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.original_name} />
        
            
            <h5> {cast.original_name}</h5>
            <p>Character: {cast.character}</p>
          
            </li>) )}  </ul>
}</>
    );
}
export default MovieCast;