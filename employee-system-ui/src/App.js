import Navbar from './components/Navbar';
import './App.css';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<EmployeeList/>}/>
          <Route path ="/employeeList" element={<EmployeeList/>}/>
          <Route path ="/addEmployee" element={<AddEmployee/>}/>
          <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
          <Route index element={<EmployeeList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
