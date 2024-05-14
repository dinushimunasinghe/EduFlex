import React from 'react'
import ExpandButton from './ExpandButton'
import Logo from '../../../assets/images/Logo.jpeg'
import LogOutButton from './LogOutButton'

function NavBar(props) {
  return (
    <div>
        <nav class="navbar navbar-expand-lg text-white" style={{ backgroundColor: '#transperant' }}>
            <div class="container-fluid">
              <h1 className='me-4'>EduFlex</h1>
                {/* <a class="navbar-brand" href="#"><img src={Logo} alt="" style={{ width: 90, height: 60 }}/></a> */}
                <ExpandButton/>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    {props.children}
                </ul>
                <LogOutButton/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar