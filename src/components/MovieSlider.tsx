import Movie from "../types/Movie";
import Carousel from 'react-elastic-carousel';
import tw from "tailwind-styled-components";
import useConfiguration from "../custom-hooks/configuration";

const Image = tw.img`
    h-32
`;

const Title = tw.div`
    text-center
`;

function MovieSlider({ movies, itemsToShow=6, itemPadding=8 }: any) {
    const imgConfiguration = useConfiguration();

    return (
        imgConfiguration && 
            <Carousel isRTL itemsToShow={itemsToShow} itemPadding={[itemPadding]}>
                {
                    movies.map((movie: Movie, index: number) => {
                        const { base_url, backdrop_sizes } = imgConfiguration;
                        const { backdrop_path, title } = movie;
                        return (
                            <div>
                                <Image src={base_url + backdrop_sizes[backdrop_sizes.length - 1] + backdrop_path} key={index} />
                                <Title>{title}</Title>
                            </div>
                        );
                    })
                }
            </Carousel>
    );
}

export default MovieSlider;