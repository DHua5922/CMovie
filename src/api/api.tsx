import axios from "axios";

const api = {
    getConfiguration: () => axios.get(`/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`),
    getTopRatedMovies: () => axios.get(`/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`),
    getPopularMovies: () => axios.get(`/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`),
    getNowPlayingMovies: () => axios.get(`/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
};

export default api;