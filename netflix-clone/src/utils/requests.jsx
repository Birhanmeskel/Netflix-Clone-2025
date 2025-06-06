const API_KEY = import.meta.env.VITE_API_KEY;


const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;

// poster: https://image.tmdb.org/t/p/original/3Z9c1tbUhP0QruRjczPHnbx3U2D.jpg
// https://api.themoviedb.org/3/discover/tv?api_key=b4874ee1c29202cb32b2bb17d9eaaca0&with_networks=213
