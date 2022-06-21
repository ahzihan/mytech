import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [ user ] = useAuthState( auth );
    const handleSignOut = () => {
        signOut( auth );
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand className='fw-bolder' as={Link} to="/">MyTech</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='fw-semibold text-black' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='fw-semibold text-black' as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className='fw-semibold text-black' as={Link} to="/projects">Projects</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fw-semibold text-black' as={Link} to="/about">About</Nav.Link>
                        {
                            user ? <Nav.Link onClick={handleSignOut} className='fw-semibold text-black' as={Link} to="/login">SignOut</Nav.Link> : <Nav.Link className='fw-semibold text-black' as={Link} to="/login">LogIn</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;