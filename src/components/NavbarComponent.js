import React from 'react'
import '../scss/AppStyles.scss';
import {Navbar, Nav} from 'react-bootstrap';
import 'regenerator-runtime/runtime'
import { login, logout } from '../utils'
import '../global.css'

const NavbarComponent = props => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>                            
                        <Nav.Link onClick={
                            (window.accountId==='') ?
                            login :
                            logout
                        }>
                            {
                                (window.accountId==='')?
                                'Login' :
                                'Logout'
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

NavbarComponent.propTypes = {
    
};

export default NavbarComponent;