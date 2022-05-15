import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect className='navbar-div' expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand className='text-primary' as={Link} to={'/home'}>Motor Bike Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey="1" as={Link} to={'/home'}>Home</Nav.Link>
                        {
                            user && <>
                                <Nav.Link eventKey="2" as={Link} to={'/manageinventories'}>Manage Items</Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to={'/additem'}>Add Items</Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to={'/myitem'}>My Items</Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to={'/charts'}>Stock Charts</Nav.Link>
                            </>
                        }
                        <Nav.Link eventKey="4" as={Link} to={'/blogs'}>Blogs</Nav.Link>
                        <Nav.Link eventKey="5" as={Link} to={'/about'}>About us</Nav.Link>
                        {
                            user ?
                                <Nav.Link className='btn btn-primary text-white' eventKey={"7"} onClick={handleSignOut}>Sign out</Nav.Link>
                                :
                                <Nav.Link className='btn btn-primary text-white' eventKey="6" as={Link} to={'/login'}>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;