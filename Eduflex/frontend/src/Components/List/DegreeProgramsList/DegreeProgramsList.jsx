import React from 'react'

function DegreeProgramsList(props) {
  return (
    <div>
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.DegreePrograms1}</div>
                    {props.Campus}
                    
                </div>
                <a class='ms-2' href={props.Link}>{props.LinkName}</a>
                <a class='ms-2' href={props.Link1}>{props.LinkName1}</a>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.DegreePrograms2}</div>
                    <h7>{props.Campus}</h7>
                </div>
                <a class='ms-2' href={props.Link}>{props.LinkName}</a>
                <a class='ms-2' href={props.Link1}>{props.LinkName1}</a>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.DegreePrograms3}</div>
                    <h7>{props.Campus}</h7>
                </div>
                <a class='ms-2' href={props.Link}>{props.LinkName}</a>
                <a class='ms-2' href={props.Link1}>{props.LinkName1}</a>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.DegreePrograms4}</div>
                    <h7>{props.Campus}</h7>
                </div>
                <a class='ms-2' href={props.Link}>{props.LinkName}</a>
                <a class='ms-2' href={props.Link1}>{props.LinkName1}</a>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.DegreePrograms5}</div>
                    <h7>{props.Campus}</h7>
                </div>
                <a class='ms-2' href={props.Link}>{props.LinkName}</a>
                <a class='ms-2' href={props.Link1}>{props.LinkName1}</a>
            </li>
        </ol>
    </div>
  )
}

export default DegreeProgramsList