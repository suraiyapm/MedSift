import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({navigate}) {
  return (
    <Navbar expand="lg" className="navbar">
      <Container> 
        <Navbar.Brand href="#home">
          <img
              src="/MedSiftLogo1-SPM.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-button' onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link className='nav-button' onClick={() => navigate("/journals")}>Journals</Nav.Link>
            <Nav.Link className='nav-button' onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
            <Nav.Link className='nav-button' onClick={() => navigate("/notes")}>Notes</Nav.Link>
            <Nav.Link className='nav-button' onClick={() => navigate("/register")}>Register</Nav.Link>
            <Nav.Link className='nav-button' onClick={() => navigate("/login")}>Login</Nav.Link>
            <Nav.Link className='nav-button' onClick={() => navigate("/about")}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// haven't resolved nav stuff yet, but soon!
export default Navigation;