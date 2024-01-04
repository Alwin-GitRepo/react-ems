import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Add() {

  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('')

  const location = useNavigate() // used to redirect from one component to another

  const handleAdd = async (e) => {

    console.log(id,name,age,designation,salary);

    const body = {id,name,age,designation,salary}

    // API call to add employee details
    await axios.post('http://localhost:8000/addEmployees',body).then((response)=>{
    console.log(response);
    alert(response.data.message)
    location('/') // redirect to admin page
    }).catch((error)=>{
      alert("Enter unique employee id")
    })
    }

  return (
    <>
      <div className="container">
        <h3 className='text-center m-3'>Add Employee Details</h3>
        <div className="container form w-50 bg-warning rounded-5 p-5">
          <MDBInput label='Id' onChange={(e)=>setId(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Name' onChange={(e)=>setName(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Age' onChange={(e)=>setAge(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Designation' onChange={(e)=>setDesignation(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Salary' onChange={(e)=>setSalary(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <div className='text-center'>
            <MDBBtn className='bg-info text-light' onClick={(e)=>handleAdd(e)}>Add</MDBBtn>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add