import MovieSliderSection from "../../components/MovieSliderSection";
import { 
  useTopRatedMovies, 
  usePopularMovies 
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
