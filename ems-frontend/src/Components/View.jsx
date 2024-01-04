import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';

function View() {
  const Navigate = useNavigate()
  const [employeeData,setEmployeeData] = useState({});
  const {id} =  useParams();
  console.log(id);
  const fetchData = async() =>{
    const {data} = await axios.get(`http://localhost:8000/viewEmployees/${id}`)
    setEmployeeData(data.employee);

  }

  useEffect(()=>{
    fetchData(id);
  },[])

  return (
    <>
       <div className='container p-5 bg-info'>
            {
              <MDBCard className='mx-5 bg-warning'>
                <MDBCardBody>
              <MDBCardHeader className='text-center h3'>{employeeData.name}</MDBCardHeader>
              <MDBListGroup className='text-center ' flush>
                <MDBListGroupItem>{employeeData.id}</MDBListGroupItem>
                <MDBListGroupItem>{employeeData.age}</MDBListGroupItem>
                <MDBListGroupItem>{employeeData.designation}</MDBListGroupItem>
                <MDBListGroupItem>{employeeData.salary}</MDBListGroupItem>
              </MDBListGroup>
              <div className='text-center m-2'>
                <MDBBtn color='info' onClick={()=>Navigate('/')}>
              <i class="fa-solid fa-arrow-left"></i>
                </MDBBtn></div>
              </MDBCardBody>  
            </MDBCard>
            }
       </div>
    </>
  )
}

export default View