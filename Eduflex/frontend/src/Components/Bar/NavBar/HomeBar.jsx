
import React, { useState } from 'react';
import ExpandButton from './ExpandButton'
import Logo from '../../../assets/images/Logo.jpeg'
import LoginButton from './LoginButton'
import SignUpButton from './SignUpButton'

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon, 
  MDBNavbarNav,

  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBInputGroup
} from 'mdb-react-ui-kit';

function HomeBar(props) {

  const [openNavColor, setOpenNavColor] = useState(false);

  return (
    <div>
        <MDBNavbar expand='lg'  className='text-center text-white' style={{ backgroundColor: '#transperant' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'></MDBNavbarBrand>
          <h3>EduFlex</h3>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColor(!openNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              
            </MDBNavbarNav>

            <MDBInputGroup tag="form" className='d-flex w-auto'>
             
              <LoginButton/>
                <SignUpButton/>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default HomeBar