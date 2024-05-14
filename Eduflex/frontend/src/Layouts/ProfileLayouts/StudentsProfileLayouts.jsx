import React from 'react'
import NavBar from '../../Components/Bar/NavBar/NavBar'
import NavLinks from '../../Components/Bar/NavBar/NavLinks'
import FooterBar from '../../Components/Bar/FooterBar/FooterBar'
import login from '../../assets/images/bg.jpg'

// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });

function StudentsProfileLayouts(props) {
  
  return (
    <div 
    style={{ backgroundImage: `url(${login})` , backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'}}
    >
      
        <NavBar>
            
            <NavLinks NavLinks="/StudentDashboard" NavName="Home " />

            <NavLinks NavLinks="/Library" NavName="Library " />

            <NavLinks NavLinks="/Course" NavName="Course " />

            <NavLinks NavLinks="/Calculator" NavName="Calculater " />

            <NavLinks NavLinks="/DocumentsUpload" NavName="UploadDocument " />

            <NavLinks NavLinks="/DocumentsList" NavName="Documents List " />

            <NavLinks NavLinks='/Vials' NavName='Vials '/>
            
      </NavBar>

      <div>
        {props.children}
      </div>
      {/* <a class="btn text-white ms-3 mb-13" data-mdb-ripple-init  href="#!" role="button"></a> */}

      
    </div>
  )
}

export default StudentsProfileLayouts