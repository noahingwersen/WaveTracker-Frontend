import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

const MainNavbar = () => {
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Link className="navbar-brand" to={'/'}>
        WaveTracker
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Add" id="add-nav-dropdown">
            <NavDropdown.Item as={Link} to="/spots/add">
              Surf Spot
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sessions">
              Surf Session
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="View" id="add-nav-dropdown">
            <NavDropdown.Item as={Link} to="/spots">
              Surf Spots
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/insights">
            Insights
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        {user ? (
          <>
            <Navbar.Text className="me-3">
              Hello,{' '}
              <Link to={'/profile/' + user.username}>
                <b>{user.username}</b>!
              </Link>
            </Navbar.Text>
            <Button variant="danger" onClick={logoutUser}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link className="btn btn-primary me-2" to={'/login'}>
              Log In
            </Link>
            <Link className="btn btn-outline-success" to="/register">
              Register
            </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MainNavbar
