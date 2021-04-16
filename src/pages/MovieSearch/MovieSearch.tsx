// @ts-ignore
import queryString from "query-string";
import Page from "../../components/Page";
import searchActions from "../../redux/actions/searchAction";
import { useDispatch } from "react-redux";
import { useMovieSearch } from "../../custom-hooks/movies";
import { Row, Col } from "react-bootstrap";
import useConfiguration from "../../custom-hooks/configuration";
import tw from "tailwind-styled-components";
import Movie from "../../types/Movie";

const Image = tw.img`
`;

const Title = tw.div`
    text-center
`;

function MainContent() {
    const searchQuery: string = queryString.parse(window.location.search).query;
    const dispatch = useDispatch();
    dispatch(searchActions.updateSearchInput(searchQuery));
    const movies = useMovieSearch(searchQuery);
    const imgConfiguration = useConfiguration();

    return (
        <Row className="px-12">
            { imgConfiguration && movies &&
                movies.map((movie: Movie, index: number) => {
                    const { backdrop_sizes, base_url } = imgConfiguration;
                    const { backdrop_path, title } = movie;
                    return (
                        <Col xs="12" sm="6" md="4" lg="3" key={index} className="p-4">
                            <div className="shadow-md">
                                <Image src={base_url + backdrop_sizes[backdrop_sizes.length - 1] + backdrop_path}/>
                                <Title>{title}</Title>
                            </div>
                        </Col>
                    );
                })
            }
        </Row>
    );
}

function MovieSearch() {
    const SearchPage = Page(MainContent);
    return <SearchPage />;
}

export default MovieSearch;