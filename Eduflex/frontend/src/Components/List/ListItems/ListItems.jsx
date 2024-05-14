import React from 'react'

function ListItems(props) {
  return (
    <div>
        <div>
        <ol class="list-group list-group-numbered bg-transparent text-light">
            {props.children}
        </ol>
    </div>
    </div>
  )
}

export default ListItems