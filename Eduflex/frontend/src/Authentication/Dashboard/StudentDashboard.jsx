import React from 'react'
import StudentsProfileLayouts from '../../Layouts/ProfileLayouts/StudentsProfileLayouts'

function StudentDashboard(props) {
  return (
    <div>
        <StudentsProfileLayouts>
        <div class='col-8 col-sm-5 mx-5 mt-4'><br />
        <h3 class="text-start fw-bold">Our Services</h3>
        </div>

        
        <div class="row row-cols-1 row-cols-md-3 g-4 m-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://addwise.co.in/wp-content/uploads/2018/06/IT-Related-Standard-big.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title fw-bold">IT Related Free Programs</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Application_Software.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title fw-bold">10000+ Assigments and Short Notes </h5>
                
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://www.aboutcivil.org/sites/default/files/2023-07/civil-engineering-past-papers.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title fw-bold">1000+ Past Papers</h5>
              </div>
            </div>
          </div>
        </div>

        <br />

        <br /><br />
        <br />
        <br />
        {props.children}
        </StudentsProfileLayouts>
    </div>
  )
}

export default StudentDashboard