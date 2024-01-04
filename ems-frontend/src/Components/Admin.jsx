import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'

function Admin() {

  const navigate = useNavigate()

  const [Data,setData] = useState([])

  // data fetching function
    const fetchData = async () => {
    const {data} = await axios.get('http://localhost:8000/getEmployees')
    console.log(data.employee);
    setData(data.employee)
    console.log(Data);
  }

  // delete a employee
  const deleteEmp = async (id) => {
    const response = await axios.delete(`http://localhost:8000/deleteEmployees/${id}`)
    alert(response.data.message)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
        <div className='container'>
            <h3 className='text-center m-3'>Employee Management System</h3>
            <p style={{textAlign : "justify"}}>Employee management is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress. In this way, employers can identify opportunities for improvement and recognize achievements.</p>
            <p style={{textAlign : "justify"}}>Employee management matters because lackluster workforce performance typically increases operating expenses. Not only that, but having to hire replacements or additional team members is time consuming and costly in its own right. By identifying problems and creating action plans for improvement, employers may be able to get the most out of their existing workforce and avoid unnecessary terminations.</p>
            <div className='text-end'>
                <Link to={'/add'}><MDBBtn className='badge bg-warning p-3 text-dark'><i className='fa-solid fa-user-plus text-primary me-2'></i>Add</MDBBtn></Link>
            </div>
            <div>
              <MDBTable bordered borderColor="primary mt-5" >
                <MDBTableHead>
                  <tr className='table-danger text-center'>
                    <th scope='col' className='border border-3 border-primary'>Id</th>
                    <th scope='col' className='border border-3 border-primary'>Name</th>
                    <th scope='col' className='border border-3 border-primary'>Age</th>
                    <th scope='col' className='border border-3 border-primary'>Designation</th>
                    <th scope='col' className='border border-3 border-primary'>Salary</th>
                    <th scope='col' className='border border-3 border-primary'>Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {
                    Data.map(a=>(
                      <tr className='table-success'>
                      <th scope='row' className='border border-3 border-primary'>{a.id}</th>
                      <td className='border border-3 border-primary'>{a.name}</td>
                      <td className='border border-3 border-primary'>{a.age}</td>
                      <td className='border border-3 border-primary'>{a.designation}</td>
                      <td className='border border-3 border-primary'>{a.salary}</td>
                      <td className='border border-3 border-primary'>
                        <div className='d-flex justify-content-evenly'>
                          <i className='fa-solid fa-pen me-2' onClick={()=>navigate(`/edit/${a.id}`)}></i>
                          <i class="fa-solid fa-eye" onClick={()=>navigate(`/view/${a.id}`)}></i>
                          <i className='fa-solid fa-trash ms-2' onClick={()=>deleteEmp(a.id)}></i>
                        </div>
                      </td>
                    </tr>
                    ))
                  }
                </MDBTableBody>
              </MDBTable>
            </div>
        </div>
    </>
  )
}

export default Admin