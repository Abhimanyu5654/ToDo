import React, { useState } from 'react';
import axios from 'axios'
export const Create=()=>{
    const[task,setTask]=useState()
    const handleAdd=()=>{
        axios.post('http://localhost:8000/add',{task:task})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    return(
        <div className='Create_Form'>
            <input type='text' placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
            <button type='button' onClick={handleAdd}>Add</button>
        </div>
    )
}