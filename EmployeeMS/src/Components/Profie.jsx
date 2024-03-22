import axios from "axios";
import React, { useEffect ,useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const [employee, setEmployee] = useState([])
    const navigate = useNavigate()
  
    useEffect(() => {
      axios.get("http://localhost:3000/auth/profile")
        .then((result) => {
          if (result.data.Status) {
            setEmployee(result.data.Result);
          } else {
            alert(result.data.Error);
          }
        })
        .catch((err) => console.log(err));
    }, []);
    return (
      <div className="px-5 mt-3">
        <div className="d-flex justify-content-center">
          <h3>Insurance</h3>
        </div>
        <div className='mt-3'>
                  <table className='table'>
                      <thead>
                          <tr>
                              <th>Insurance Number</th>
                              <th>Employee ID</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              employee.map((e,i) => (
                                
                                  <tr key={i}>
                                      <td>{e.Insurance_id}</td>
                                      <td>{e.emp_id}</td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>
              </div>
      </div>
    );
  };

export default Profile