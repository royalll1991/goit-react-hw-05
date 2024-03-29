import css from './MoviePage.module.css';
import { useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { searchMovies } from '../../serch-movies';
import MoviesList from '../../components/MovieList/MovieList';
import { ThreeDots } from 'react-loader-spinner'



function MoviePage (){
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const notify = () => toast('no movies to find, put text');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!query) {
            notify();
            return;
        }
        
       fetchMovies(query);
       
    };
    

 function Loader () { return (<div className={css.center}>
    <ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#00008B"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    </div>);}
          
                
                const fetchMovies = async (query) => {
                    try {if (!query) {
                        return;
                    }
                    setIsLoading(true);
                        const data = await searchMovies(query);
                        setMovies(data.results);
                    } catch (error) {
                        setError(true);
                    }finally {
                        setIsLoading(false);
                    }
                };
      


    return(<div><form onSubmit={handleSubmit}>
        <input className = {css.search}
            value={query}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>Search</button>
        <Toaster />
    </form>
    {isLoading && <Loader />}
    {error && <p>No movies found</p>}
    <ul className={css.film}>
        <MoviesList movies = {movies}/>
        </ul>
    </div>);
}
export default MoviePage;