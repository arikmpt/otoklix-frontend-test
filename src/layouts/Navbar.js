import { Navbar as BNavbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <BNavbar bg="light" expand="lg">
        <Container>
            <BNavbar.Brand href="/">Otoklix FE Test</BNavbar.Brand>
            <BNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BNavbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/" className='nav-link'>Home</Link>
                </Nav>
            </BNavbar.Collapse>
        </Container>
    </BNavbar>
)

export default Navbar