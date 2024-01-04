import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <img src="https://desklog.io/wp-content/uploads/2023/09/team-management-1.png" alt="" width={"40rem"} />
                    <span></span>Employment Management System
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    </div>
  )
}

export default Header