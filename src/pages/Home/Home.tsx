import MovieSliderSection from "../../components/MovieSliderSection";
import Page from "../../components/Page";
import { 
  useTopRatedMovies, 
  usePopularMovies,
  useNowPlayingMovies
} from "../../custom-hooks/movies";

function MainContent() {
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
        <div className="px-8 pt-2">
          {
            movieSections.map(section => (
              <>
                { section.movies && <MovieSliderSection {...section} /> }
              </>
            ))
          }
        </div>
    );
}

function Home() {
    const Homepage = Page(MainContent);
    return <Homepage />
}

export default Home;