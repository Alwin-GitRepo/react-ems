import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function Edit() {

  const history = useNavigate()

  const [empId,setId]=useState('')
  const [empName,setName]=useState('')
  const [empAge,setAge]=useState('')
  const [empDesignation,setDesignation]=useState('')
  const [empSalary,setSalary]=useState('')

  const {id} = useParams()
  console.log(id); // particular id

  // to get particular id details
    const fetchData = async(id) =>{
    const {data} = await axios.get(`http://localhost:8000/viewEmployees/${id}`)
    console.log(data.employee);
    setId(data.employee.id)
    setName(data.employee.name)
    setAge(data.employee.age)
    setDesignation(data.employee.designation)
    setSalary(data.employee.salary)
  }

  console.log(empId,empName,empAge,empDesignation,empSalary);

  const handleUpdate = async (e) =>{
    const body = {id:empId,name:empName,age:empAge,designation:empDesignation,salary:empSalary}
    const result = await axios.post('http://localhost:8000/updateEmployees/'+id,body)
    console.log(result);
    alert(result.data.message)
    history('/')
  }

  useEffect(()=>{
    fetchData(id);
  },[])

  return (
    <>
      <div className="container">
        <h3 className='text-center m-3'>Update Employee Details</h3>
        <div className="container form w-50 bg-warning rounded-5 p-5">
          <MDBInput label='Id' value={empId} onChange={(e)=>setId(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Name' value={empName} onChange={(e)=>setName(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Age' value={empAge} onChange={(e)=>setAge(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Designation' value={empDesignation} onChange={(e)=>setDesignation(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Salary' value={empSalary} onChange={(e)=>setSalary(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <div className='text-center'>
            <MDBBtn className='bg-info text-light' onClick={(e)=>handleUpdate(e)}>Update</MDBBtn>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit