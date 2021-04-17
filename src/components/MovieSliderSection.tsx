import MovieSlider from "./MovieSlider";
import tw from "tailwind-styled-components";

const Title = tw.div`
    text-3xl
    pb-3
`;

function MovieSliderSection({ title="", movies }: any) {
    return (
        <div className="pt-3">
            <Title>{title}</Title>
            <MovieSlider movies={movies} />
        </div>
    );
}

export default MovieSliderSection;