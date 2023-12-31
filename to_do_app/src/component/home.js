import React, { useEffect, useState } from 'react';
import { Create } from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

export const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/get")
            .then((result) => setTodos(result.data))
            .catch((err)=>console.log(err))
    })
    const handleEdit=(id)=>{
        axios.put('http://localhost:8000/update/'+id)
            .then((result) =>console.log(result))
            .catch((err)=>console.log(err))
    }
    const handleDelete=(id)=>{
        axios.delete('http://localhost:8000/delete/'+id)
            .then((result) =>console.log(result))
            .catch((err)=>console.log(err))

    }

    return (
        <div className='home' >
            <h2 className=''>To Do List </h2>
            <Create />
            {
                todos.length === 0 ?
                    <div>
                        <h2>No Record</h2>
                    </div >
                    :
                    todos.map(todo => (
                        <div className='task'>
                            <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                                {
                                    todo.done ?
                                    <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                                    : <BsCircleFill className="icon"/>
                                }
                               
                            <p className={todo.done ? 'line_throw' :""}>  {todo.task}</p>
                            </div>
                           
                            <div>
                                <span>< BsFillTrashFill className='icon'
                                 onClick={()=>handleDelete(todo._id)}
                                /></span>
                            </div>
                        </div>
                    ))

            }
        </div>
    )
}