import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name] : value});
    }
    
    const saveEmployee = e => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) =>{
            console.log(response);
            navigate("/employeeList")
        }).catch((err) => {
            console.log(err);
        })
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        });
    }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="justify-center items-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >First Name</label>
                <input className="h-10 w-96 border mt-2 px-2 py-2"
                 type="text"
                 value = {employee.firstName}
                 onChange = {(e) => handleChange(e)}
                 name="firstName"></input>
            </div>

            <div className="justify-center items-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >Last Name</label>
                <input className="h-10 w-96 border mt-2 px-2 py-2" 
                type="text"
                value = {employee.lastName}
                onChange = {(e) => handleChange(e)}
                name="lastName"></input>
            </div>

            <div className="justify-center items-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >E-Mail</label>
                <input className="h-10 w-96 border mt-2 px-2 py-2" 
                type="email"
                value = {employee.emailId}
                onChange = {(e) => handleChange(e)}
                name="emailId"></input>
            </div>

            <div className="justify-center items-center h-14 w-full my-4 space-x-4">
                <button 
                className="rounded text-white font-semibold bg-red-600 px-6 hover:bg-green-500 py-2"
                onClick={saveEmployee}>
                     Save
                </button>
                <button 
                className="rounded text-white font-semibold bg-orange-600 px-6 hover:bg-green-500 py-2"
                onClick={reset}
                > 
                Clear 
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee;