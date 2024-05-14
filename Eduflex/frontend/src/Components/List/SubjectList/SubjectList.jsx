import React from 'react'
import ListItems from '../ListItems/ListItems'
import Items from '../../Items/Items'
import NavLinks from '../../Bar/NavBar/NavLinks'

function SubjectList() {
  return (
    <div>
        <div class="row mt-4 m-5 mb-5 container">
        <h2 className='mt-4 mb-4'>Subject List</h2>
        
          <div class="col-5 mt-4 mb-5">
            <div class="list-group mt-4 mb-4" id="list-tab" role="tablist">
              
              <a class="list-group-item list-group-item-action mb-5" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"></a>
              <a class="list-group-item list-group-item-action mb-5" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Subject 2</a>
              <a class="list-group-item list-group-item-action mb-5" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Subject 3</a>
              <a class="list-group-item list-group-item-action mb-5" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Subject 4</a>
            </div>
          </div>

          <div class="col-6 mt-5">
            <div class="tab-content" id="nav-tabContent">

              <div class="tab-pane fade show" id="list-home" role="tabpanel" aria-labelledby="list-home-list"> 
              <ListItems>
                <Items ListItems1='Lectures'>
                  <NavLinks NavLinks="/LectureSlids" NavName="LectureSlids" />
                </Items>
                <Items ListItems1='Assignments'>
                  <NavLinks NavLinks="/Assignments" NavName="Assignments" />
                </Items>
              </ListItems>
              </div>

              <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
              <ListItems>
                <Items ListItems1='Lectures'>
                  <NavLinks NavLinks="/LectureSlids" NavName="LectureSlids" />
                </Items>
                <Items ListItems1='Assignments'>
                  <NavLinks NavLinks="/Assignments" NavName="Assignments" />
                </Items>
              </ListItems>           
              </div>

              <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
              <ListItems>
                <Items ListItems1='Lectures'>
                  <NavLinks NavLinks="/LectureSlids" NavName="LectureSlids" />
                </Items>
                <Items ListItems1='Assignments'>
                  <NavLinks NavLinks="/Assignments" NavName="Assignments" />
                </Items>
              </ListItems>         
              </div>

              <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
              <ListItems>
                <Items ListItems1='Lectures'>
                  <NavLinks NavLinks="/LectureSlids" NavName="LectureSlids" />
                </Items>
                <Items ListItems1='Assignments'>
                  <NavLinks NavLinks="/Assignments" NavName="Assignments" />
                </Items>
              </ListItems>       
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default SubjectList