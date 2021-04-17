import Movie from "../types/Movie";
import useConfiguration from "../custom-hooks/configuration";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieDisplay from "./MovieDisplay";
import { useDispatch } from "react-redux";
import popupActions from "../redux/actions/popupAction";

interface Props {
    movies: Movie[]
}

function MovieSlider({ movies }: Props) {
    const imgConfiguration = useConfiguration();
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        imgConfiguration && 
            <Carousel responsive={responsive}>
                {
                    movies.map((movie: Movie, index: number) => {
                        const { base_url, backdrop_sizes } = imgConfiguration;
                        const { backdrop_path, title } = movie;
                        return (
                            <div className="my-2 mx-3" key={index}>
                                <MovieDisplay 
                                    title={title}
                                    src={base_url + backdrop_sizes[backdrop_sizes.length - 1] + backdrop_path}
                                    onClick={() => dispatch(popupActions.openPopup(movie))}
                                />
                            </div>
                        );
                    })
                }
            </Carousel>
    );
}

export default MovieSlider;