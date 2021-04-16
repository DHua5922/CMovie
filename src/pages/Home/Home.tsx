import MovieSliderSection from "../../components/MovieSliderSection";
import Page from "../../components/Page";
import SearchBar from "../../components/SearchBar";
import { 
  useTopRatedMovies, 
  usePopularMovies,
  useNowPlayingMovies
} from "../../custom-hooks/movies";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function useOnSearchSubmit() {
    const history = useHistory();
    const { input } = useSelector((state: any) => state.searchReducer);

    return (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        history.push(`/search?query=${input}`);
    }
}

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
            <SearchBar onSubmit={useOnSearchSubmit()} />
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