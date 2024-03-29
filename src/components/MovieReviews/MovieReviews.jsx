import { useState,useEffect } from "react";
import { getReviews } from "../../serch-movies";
import { useParams } from "react-router-dom";

function MovieReviews () {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState (false);

    useEffect(() => {
        async function getCastId() {
          try { const data = await getReviews(movieId);
      setReviews(data.results);
      
          } catch (error) {
              setError(true)
              
          }
          
} getCastId(); }, [movieId]);
console.log(reviews)

return (
    <>
        {reviews.length === 0 ? (<p>We dont have any reviews for this movie</p>
        ) : (
            <>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <h6>{review.author}</h6>
                        <p>{review.content}</p>
                    </div>
                ))}
            </>
        )}
    {error & <p>Problem, reboot page!!!</p>}
    </>
);
}
export default MovieReviews;