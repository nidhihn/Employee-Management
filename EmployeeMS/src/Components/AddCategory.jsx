import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddCategory = () => {
    const [category, setCategory]= useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        console.log(category);
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_category', {category})
        .then(result => {
            if(result.data.Status){
                navigate('/dashboard/category')
            } else {
                alert(result.data.Error)
            }
        } )
        .catch(err => console.log(err))
    }
    return(
        <div className='d-flex justify-content-center align-items-center h-75 '>
            <div className='p-3 rounded w-25 border '>
                
               <h2>Add Category</h2> 
               <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='category'><strong>Category:</strong></label>
                    <input type='text' name='category'  placeholder='Enter Category'
                     onChange={(e)=>setCategory(e.target.value) } className='form-control rounded-0'/>
                </div>
                
                <button className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
               
               </form>
            </div>
        </div>
    )
}

export default AddCategory







// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AddCategory = () => {
//   const [category, setCategory] = useState(''); // Initialize with empty string
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/auth/add_category', { category });
//       if (response.data.Status) {
//         navigate('/dashboard/category');
//       } else {
//         alert(response.data.Error);
//       }
//     } catch (err) {
//       console.error('Error adding category:', err); // Handle errors more gracefully
//     }
//   };

//   return (
//     <div className='d-flex justify-content-center align-items-center h-75'>
//       <div className='p-3 rounded w-25 border'>
//         <h2>Add Category</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor="category"><strong>Category:</strong></label>
//             <input
//               type="text"
//               name='category'
//               placeholder='Enter Category'
//               value={category} // Set input value from state
//               onChange={(e) => setCategory(e.target.value)}
//               className='form-control rounded-0'
//             />
//           </div>
//           <button className='btn btn-success w-100 rounded-0 mb-2'>Add Category</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCategory;