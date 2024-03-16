import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeeDetail = () => {
    const [employee, setEmployee]= useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Employee Management System</h4>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center mt-3">
                
            </div>
        </div>
    )
}

export default EmployeeDetail