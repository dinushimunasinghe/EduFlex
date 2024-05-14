import React from 'react'

function NavLinks(props) {
  return (
    <div>
      <li class="nav-item">
        <a class="nav-link active fw-bold text-white" aria-current="page" href={props.NavLinks}>{props.children}{props.NavName}</a>
      </li>
        
    </div>
  )
}

export default NavLinks