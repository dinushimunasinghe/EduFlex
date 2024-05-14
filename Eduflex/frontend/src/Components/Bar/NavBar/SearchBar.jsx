import React from 'react'

function SearchBar() {
  return (
    <div className='col-6 col-sm-4 mt-5'>
        <div>
            <form class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-dark ms-2" type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}

export default SearchBar