import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/myprofile">Example 1</Nav.Link>
                    <Nav.Link href="/">Example 2</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/">Example 3</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}