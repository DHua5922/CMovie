import MovieSliderSection from "../../components/MovieSliderSection";
import Page from "../../components/Page";
import SearchBar from "../../components/SearchBar";
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
        <>
          <div className="py-4 px-12">
            <SearchBar />
          </div>
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

function Home() {
    const Homepage = Page(MainContent);
    return <Homepage />
}

export default Home;