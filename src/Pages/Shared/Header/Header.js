import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo_gorilla from '../../../img/logo_gorilla.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="black" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo_gorilla} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#happy-client">Happy Client</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="gallery">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;