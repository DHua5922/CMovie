import MyNavbar from "./Navbar"
import SearchBar from "./SearchBar";

function Page(MainComponent: any) {
    return function PageComponent() {
        return (
            <>
                <MyNavbar />
                <div className="py-4 px-12">
                    <SearchBar />
                </div>
                <MainComponent />
            </>
        );
    }
}

export default Page;