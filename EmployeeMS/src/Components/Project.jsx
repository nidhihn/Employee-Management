import axios from "axios";
import React, { useEffect ,useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Employee = () => {
  const [employee, setEmployee] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/auth/project")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/delete_employee/'+id)
    .then(result => {
      if(result.data.Status){
        window.location.reload()
      } else {
        alert(result.data.Error)
      }
    })
  }
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Project Details</h3>
      </div>
      <div className='mt-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Project Number</th>
                            <th>Project Name</th>
                            <th>Due Date</th>
                            <th>Project Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map((e,i) => (
                              
                                <tr key={i}>
                                    <td>{e.Project_no}</td>
                                    <td>{e.Project_name}</td>
                                    <td>{e.Due_Date}</td>
                                    <td>{e.Project_location}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default Employee;
