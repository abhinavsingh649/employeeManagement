import React, {useState, useEffect} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name] : value});
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await EmployeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    
    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
        .then((response) => {
            navigate("/employeeList")
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Update Employee</h1>
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
                onClick={updateEmployee}>
                     Update
                </button>
                <button 
                className="rounded text-white font-semibold bg-orange-600 px-6 hover:bg-green-500 py-2"
                onClick={() => navigate("/employeeList")}
                > 
                Cancel
                </button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee