import './App.css';
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navigation from '../Navigation/Navigation';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';


function App() {
    const HomePage = lazy(() => import ('../../pages/HomePage/HomePage'));
    const MoviesPage = lazy(() => import ('../../pages/MoviesPage/MoviesPage'));
    const MovieDetailsPage = lazy(() => import ('../../pages/MovieDetailsPage/MovieDetailsPage'));
    const NotFoundPage = lazy(() => import ('../../pages/NotFoundPage/NotFoundPage'));


    return (
        <div>
<Navigation/>

            <Suspense fallback = {null}>
            <Routes>
                <Route path = '/' element = {<HomePage/>}/>
                <Route path='/movies' element = {<MoviesPage/>}/>
                <Route path='/movies/:movieId' element = {<MovieDetailsPage/>}> 
                    <Route path='cast' element = {<MovieCast/>}/>
                    <Route path='reviews' element = {<MovieReviews/>}/>

                </Route> 
                <Route path='*' element = {<NotFoundPage/>}/>
            </Routes>
            </Suspense>

        </div>
    );
}

export default App;
