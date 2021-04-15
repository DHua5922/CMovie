import MovieSliderSection from "../../components/MovieSliderSection";
import { 
  useTopRatedMovies, 
  usePopularMovies,
  useNowPlayingMovies
} from "../../custom-hooks/movies";

function App() {
  const movieSections = [
    {
      title: "Top Movies",
      movies: useTopRatedMovies()
    },
    {
      title: "Popular Movies",
      movies: usePopularMovies()
    },
    {
      title: "Now Playing",
      movies: useNowPlayingMovies()
    }
  ];

  return (
    <>
      {
        movieSections.map(section => (
          <>
            { section.movies && <MovieSliderSection {...section} /> }
          </>
        ))
      }
    </>
  );
}

export default App;
