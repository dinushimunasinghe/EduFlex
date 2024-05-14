import React from 'react'
import DegreeProgramsList from '../DegreeProgramsList/DegreeProgramsList'
import ListItems from '../ListItems/ListItems'
import Items from '../../Items/Items'

function CourseList() {
  return (
    <div>
        <div class="row mt-4 m-5 container">
        
        <h2 className='mb-4'>Undergraduate Degree Programmes</h2>
          <div class="col-5 ms-5">
          <div class="list-group" id="list-tab" role="tablist">
              <a class="text-start list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"><i class="fas fa-desktop me-2"></i> Computing</a>
              <a class="text-start list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"><i class="fas fa-house-laptop me-2"></i>Enginnering</a>
              <a class="text-start list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"><i class="fas fa-briefcase me-2"></i>Businesses</a>
              <a class="text-start list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"><i class="fas fa-atom me-4"></i>Science</a>
            </div>
          </div>

          <div class="col-4">
            <div class="tab-content" id="nav-tabContent">

              <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
              <ListItems>
                <Items ListItems1='Software Enginnering'/>
                <Items ListItems1='Computer Network'/>
                <Items ListItems1='Cyber security'/>
                <Items ListItems1='Information System'/>
                <Items ListItems1='Data Science'/>
              </ListItems>
              </div>

              <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
              <ListItems>
                <Items ListItems1='Electical and Electronic Enginnering' />
                <Items ListItems1='Civil Enginnering' />
                <Items ListItems1='Mechanical Enginnering' />
                <Items ListItems1='Mechanical Enginnering' />
                <Items ListItems1='Mechatronic Enginnering' />
              </ListItems>
              </div>

              <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
              <ListItems>
                <Items ListItems1='Account & Finanace' />
                <Items ListItems1='International business'/>
                <Items ListItems1='Logistic' />
                <Items ListItems1='Business Analytics' />
                <Items ListItems1='Multimedia'  />
              </ListItems>
              </div>

              <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
              <ListItems>
                <Items ListItems1='Biomedical Science' />
                <Items ListItems1='Pharmaceutical Science' />
                <Items ListItems1='Psychology' />
                <Items ListItems1='Nursing'  />
                <Items ListItems1='Nutrition and Health' />
              </ListItems>
              </div>

            </div>
          </div>
        </div>

        <div className='col-10 container mb-4'>
            <h2>Foundation Course</h2>
            <DegreeProgramsList DegreePrograms1='Foundation Programme for Bachelor’s Degree' DegreePrograms2='Foundation Programme for Bachelor’s Degree' DegreePrograms3='Foundation Programme for Bachelor’s Degree' DegreePrograms4='Foundation Programme for Bachelor’s Degree' DegreePrograms5='Foundation Programme for Bachelor’s Degree' Campus='After O/Ls'/>
        </div>

        <div className='col-10 container mb-4'>
            <h2>Postgraduate Programmes</h2>
            <DegreeProgramsList DegreePrograms1='PhD in Management' DegreePrograms2='Master of Business Administration (MBA)' DegreePrograms3='Postgraduate Diploma In Human Resource Management' DegreePrograms4='Master of Science in Information Technology (MSc in IT)' DegreePrograms5='Master of Science in Information Technology (MSc in IT)'/>
        </div>

        
    </div>
  )
}

export default CourseList