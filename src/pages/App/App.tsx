import MovieSliderSection from "../../components/MovieSliderSection";
import { useTopRatedMovies } from "../../custom-hooks/movies";

function App() {
  const topMovies = useTopRatedMovies();

  return (
    <>
      { topMovies && <MovieSliderSection title="Top Movies" movies={topMovies} /> }
    </>
  );
}

export default App;
