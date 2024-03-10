import React, { useEffect, useState } from "react";
import axios from "axios";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
  });
  const [category, setCategory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',employee.name);
    formData.append('email',employee.email);
    formData.append('password',employee.password);
    formData.append('address',employee.address);
    formData.append('salary',employee.salary);
    formData.append('image',employee.image);
    formData.append('category_id',employee.category_id);
    console.log(employee);
    axios
      .post("http://localhost:3000/auth/add_employee", formData)
      .then((result) => {
        console.log(result);
        setEmployee({
          name: "",
          email: "",
          password: "",
          salary: "",
          address: "",
          category_id: "",
          image: "",
        });
        document.getElementById("inputGroupFile01").value = "";
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        <h3 className="text-center">Add Employee</h3>

        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
              value={employee.name}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
              value={employee.email}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
              value={employee.password}
            />
            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter salary"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
              value={employee.salary}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
              value={employee.address}
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            
            >
                 <option value="1" defaultChecked>select category</option>

              {category.map((c, i) => {
                return (
                  <option key={i} value={c.id}>
                    {" "}
                    {c.name}{" "}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.files[0] })
              }
              
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};




export default AddEmployee;