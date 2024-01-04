// 1. import express
const express = require('express')

// 2. import cors
const cors = require('cors')

const logic = require ('./Services/logic')

// 3. create a server application using the express 
const serverApp = express()

// 4. use cors and express
serverApp.use(cors({
    origin : 'http://localhost:3000'
}))
serverApp.use(express.json())

// 5. server listen
serverApp.listen(8000,() => {
    console.log("server listening on port 8000")
})

// get all employee API call 
serverApp.get('/getEmployees',(req,res)=>{
    logic.getAllEmployee().then((result)=>{
        res.status(result.statusCode).json(result) // array of employee
    })
})

// add employee API call
serverApp.post('/addEmployees',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// delete employee API call
serverApp.delete('/deleteEmployees/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// view employee API call
serverApp.get('/viewEmployees/:id',(req,res)=>{
    logic.viewEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// update employee API call
serverApp.post('/updateEmployees/:id',(req,res)=>{
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})