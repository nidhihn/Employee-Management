import express from "express";
import con from "../utills/db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

const router = express.Router()

router.post("/employee_login", (req, res) => {
  
    const sql = "SELECT * from employee where email = ? ";
    console.log(req.body.email)
    con.query(sql, [req.body.email], (err, result) => {
      if (err) return res.json({ loginStatus: false, Error: "Query error" });
      if (result.length > 0) {
        bcrypt.compare(req.body.password, result[0].password, (err, response) => {
            if (err) return res.json({ loginStatus: false, Error: "Wrong password" }); 
            if(response) {
                const email = result[0].email;
                const token = jwt.sign(
                { role: "employee", email: email },
                    "employee_secret_key",
                 { expiresIn: "1d" }
        );
        res.cookie('token', token)
        return res.json({ loginStatus: true,id:result[0].id });
            }
        })
        
        
      } else{
          return res.json({ loginStatus: false, Error: "Wrong email or password" });
      }
    });
  });



  export { router as employeeRouter };