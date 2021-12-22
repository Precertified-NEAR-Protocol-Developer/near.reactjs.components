import React from 'react'
import './scss/AppStyles.scss';
import {Navbar, NavDropdown, Nav, Container, Row} from 'react-bootstrap';
import 'regenerator-runtime/runtime'
import { login, logout } from './utils'
import './global.css'
import MetaData from './components/MetaData'
import NavbarComponent from './components/NavbarComponent'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (
    <React.Fragment>
    <NavbarComponent/>
      {
        (window.accountId==='') ?
          'You cannot see MetaData associated with the account until you login.'
          :
          <MetaData/>
      }
    </React.Fragment>
  );
} 
