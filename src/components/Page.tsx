import MyNavbar from "./Navbar"
import SearchBar from "./SearchBar";
import styled from "styled-components";
import MovieInfoPopup from "./MovieInfoPopup";
import { useSelector, useDispatch } from "react-redux";
import popupActions from "../redux/actions/popupAction";
import PageTitle from "./PageTitle";

const MainContainer = styled.div`
    padding: 30px 8vw;
`;

interface Props {
    title: string
}

function Page(MainComponent: any) {
    return function PageComponent({ title }: Props) {
        const dispatch = useDispatch();
        const { movieInfo, show } = useSelector((state: any) => state.popupReducer);

        return (
            <>
                <PageTitle title={title} />
                <MyNavbar />
                <MainContainer>
                    <SearchBar />
                    <MainComponent />
                </MainContainer>
                <MovieInfoPopup 
                    show={show}
                    onHide={() => dispatch(popupActions.closePopup())}
                    movieInfo={movieInfo}
                    hasImage={movieInfo.hasImage}
                />
            </>
        );
    }
}

export default Page;