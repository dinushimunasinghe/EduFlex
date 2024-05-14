import React from 'react'

function LoginButton() {
  return (
    <div>
        <form class="d-flex" role="search">
            <a  href='/Login' 
             style={{ 
              backgroundColor: '#transperant', 
              color: 'white', 
              textDecoration: 'none',
              padding: '10px 10px',
              border: 'none',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
              cursor: 'pointer', // Set cursor to pointer to indicate clickable
              ':hover': {
                color: 'black' // Change text color to black on hover
              }
            }} type="submit">LogIn</a>
        </form>
    </div>
  )
}

export default LoginButton