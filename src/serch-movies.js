import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const Authorization =  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZiNTQ4YWY1MDM0ZGM4MzViZmUwODM5MTU1ZmQ4MCIsInN1YiI6IjY2MDE4N2QzNjA2MjBhMDE2MzI5ZmEyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJseOVjAzCMI9QTeXpWsl4wjaBgKj1EWcjXkkR9cONc'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: Authorization
  }
};

export const trendingMovies = async () =>{
  

  const response = await axios.get(`/trending/movie/day?language=en-US`, options);
console.log(response.data);
return response.data;

};
  
export const searchMovies = async (query) =>{
  

  const response = await axios.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
console.log(response.data);
return response.data;

};

export const getMovieById  = async (movieId) =>{
 
  const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
console.log(response.data);
return response.data;

};

export const getCast  = async (movieId) =>{
 
  const response = await axios.get(`/movie/${movieId}/credits?language=en-US`, options);
console.log(response.data);
return response.data;

};

export const getReviews  = async (movieId) =>{
 
  const response = await axios.get(`/movie/${movieId}/reviews?language=en-US&page=1`, options);
console.log(response.data);
return response.data;

};


