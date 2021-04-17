import MyNavbar from "./Navbar"
import SearchBar from "./SearchBar";
import styled from "styled-components";

const MainContainer = styled.div`
    padding: 30px 8vw;
`;

function Page(MainComponent: any) {
    return function PageComponent() {
        return (
            <>
                <MyNavbar />
                <MainContainer>
                    <SearchBar />
                    <MainComponent />
                </MainContainer>
            </>
        );
    }
}

export default Page;