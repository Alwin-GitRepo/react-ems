// import db
const db = require('./db')

// get all emoloyees details
const  getAllEmployee =()=>{
    return db.Employee.find().then((response)=>{
        if(response){
            return {
                statusCode: 200,
                employee:response
            }
        }
        else{
            return{
                statusCode: 404,
                message: 'no such employee found'
            }
        }
    })
}

// add employee details
const addEmployee =(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode : 401,
                message : 'Employee already exists'
            }
        }
        else{
            // store employee details in db
            const newEmployee = db.Employee({id,name,age,designation,salary})
            // to save data
            newEmployee.save()
            return{
                statusCode : 200,
                message : "Employee Added Succesfully"
            }
        }
    })
}

// delete an employee from the database
const deleteEmployee = (id) => {
    return db.Employee.deleteOne({id}).then((result)=>{
        if (result)
        {
            return{
                statusCode : 200,
                message : "Employee Deleted Succesfully"
            }
        }
        else
        {
            return{
                statusCode : 404,
                message : "Employee Not Found"
            }
        }
    })
}

// view employee
const  viewEmployee =(id)=>{
    return db.Employee.findOne({id}).then((response)=>{
        if(response){
            return {
                statusCode: 200,
                employee:response
            }
        }
        else{
            return{
                statusCode: 404,
                message: 'No such employee found'
            }
        }
    })
}

// update employee
const updateEmployee =(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if (result)
        {
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save(); // to update changes in db
            return{
                statusCode : 200,
                message : "Employee data updated succesfully"
            }
        }
        else
        {
            return{
                statusCode : 404,
                message: "couldn't find employee"
            }
        }
    })
}


module.exports ={
    getAllEmployee,addEmployee,deleteEmployee,viewEmployee,updateEmployee
}