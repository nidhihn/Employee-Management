import { useEffect, useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profie'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/verify')
    .then(result => {
      if(result.data.Status) {
        if(result.data.role === "admin"){
          navigate('/dashboard')
        } else {
         navigate('/employee_detail/'+result.data.id) 
        }
      } else{
        navigate('/start')
      }
    }).catch(err => console.log(err))
  }, [])

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/start' element={<Start/>}></Route>
    <Route path='/adminlogin' element={<Login/>}></Route>
    <Route path='/employee_login' element={<EmployeeLogin/>}></Route>
    <Route path='/employee_detail/:id' element={<EmployeeDetail/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/dashboard/employee' element={<Employee/>}></Route>
      <Route path='/dashboard/category' element={<Category/>}></Route>
      <Route path='/dashboard/profile' element={<Profile/>}></Route>
      <Route path='/dashboard/add_category' element={<AddCategory/>}></Route>
      <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
      <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
      
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
