import MovieSlider from "./MovieSlider";
import tw from "tailwind-styled-components";

const Container = tw.div`
    px-12
`;

const Title = tw.div`
    text-3xl
`;

function MovieSliderSection({ title="", movies }: any) {
    return (
        <Container>
            <Title>{title}</Title>
            <MovieSlider movies={movies} />
        </Container>
    );
}

export default MovieSliderSection;