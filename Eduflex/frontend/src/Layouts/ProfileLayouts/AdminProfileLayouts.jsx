import React from 'react'
import NavBar from '../../Components/Bar/NavBar/NavBar'
import NavLinks from '../../Components/Bar/NavBar/NavLinks'
import FooterBar from '../../Components/Bar/FooterBar/FooterBar'
import background from '../../assets/images/Background.jpeg'
import login from '../../assets/images/bg.jpg'

function AdminProfileLayouts(props) {
  return (
    <div style={{ backgroundImage: `url(${login})` , backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'}}>
        <NavBar>
            <NavLinks NavLinks='/StudentsList' NavName='Studets |'/>
            <NavLinks NavLinks='/VialsList' NavName='Vials List |'/>
            <NavLinks NavLinks='/UploadDocuments' NavName='Upload Documents |'/>
            <NavLinks NavLinks='/CreateVilas' NavName='Create Vilas |'/>  
            <NavLinks NavLinks='/UploadCoursesVideos' NavName='Upload Courses Videos |'/>        
        </NavBar>
    
        <div>
            {props.children}
        </div>

        
    </div>
  )
}

export default AdminProfileLayouts