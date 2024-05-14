import React from 'react'

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function FooterBar() {
  return (
    <div>
    
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        

        <section className='mb-4'>
          <p>
          Prepare for an in-demand career with Coursera Plus. Your subscription includes unlimited access to Professional Certificates from Google, Meta, Microsoft and more. Many of these programs also offer a flexible way to earn credit towards a degree.          </p>
        </section>

        <section className=''>
          <MDBRow>
            

            
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://EduFlex.com.com/'>
          EduFlex.com
        </a>
      </div>
    </MDBFooter></div>
  )
}

export default FooterBar