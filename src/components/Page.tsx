import MyNavbar from "./Navbar"
import SearchBar from "./SearchBar";
import styled from "styled-components";
import MovieInfoPopup from "./MovieInfoPopup";
import { useSelector, useDispatch } from "react-redux";
import popupActions from "../redux/actions/popupAction";

const MainContainer = styled.div`
    padding: 30px 8vw;
`;

function Page(MainComponent: any) {
    return function PageComponent() {
        const dispatch = useDispatch();
        const { movieInfo, show } = useSelector((state: any) => state.popupReducer);

        return (
            <>
                <MyNavbar />
                <MainContainer>
                    <SearchBar />
                    <MainComponent />
                </MainContainer>
                <MovieInfoPopup 
                    show={show}
                    onHide={() => dispatch(popupActions.closePopup())}
                    movieInfo={movieInfo}
                />
            </>
        );
    }
}

export default Page;