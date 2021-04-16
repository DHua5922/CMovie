import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href={process.env.REACT_APP_PUBLIC_URL}>CMovie</Navbar.Brand>
        </Navbar>
    );
}

export default MyNavbar;