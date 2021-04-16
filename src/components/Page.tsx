import MyNavbar from "./Navbar"

function Page(MainComponent: any) {
    return function PageComponent() {
        return (
            <>
                <MyNavbar />
                <MainComponent />
            </>
        );
    }
}

export default Page;