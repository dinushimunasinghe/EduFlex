import React from 'react'

function Items(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start bg-transparent">
        <div class="ms-2 me-auto">
            <div class="fw-bold text-dark">{props.ListItems1}</div>
            <div class="fw-bold text-dark">{props.ListItems2} </div>
            {props.Campus}
        </div>
        {props.children}
        <a class='ms-2' href={props.Link}>{props.LinkName}</a>
    </li>
  )
}

export default Items