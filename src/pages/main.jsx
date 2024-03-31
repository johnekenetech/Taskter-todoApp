import { useState } from "react";
import Task from "../component/task";
import { useLocation } from "react-router-dom";


const Main = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState('')
    const [toggle, setToggle] = useState(true)
    const location =  useLocation()
    const {name} = location.state
    
    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleClick = () => {
        if(newTask === ''){
            const inputField = document.querySelector('#taskInput')
            inputField.placeholder = 'Enter Text!'
        }else if (Number(newTask)){
            const inputField = document.querySelector('#taskInput')
            inputField.placeholder = 'Input texts only'
        }else{
            setTodoList([...todoList, newTask])
            setNewTask('')
        }
    }

    const handleDelete = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index))
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="min-h-screen bg-black px-8 py-10 sm:px-12 md:px-20 lg:px-40">
            <p className="text-white  mb-10 text-center text-[25px] sm:text-[27px] md:text-[29px] lg:text-[33px]">Welcome, {name}!</p>
            <h1 className="text-green-400 text-center mb-4 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px]">What's your plan for today?</h1>
            <div className="flex justify-center items-center h-20 mb-6 sm:mb-9 md:mb-12 lg:mb-20">
                <input type="text" id="taskInput" value={newTask} placeholder=""  className="font-semibold py-[10px] pl-4 outline-none lg:px-10" onChange={handleChange}/>
                <button className="bg-green-500 px-2 py-[10px] text-white font-semibold outline-none" onClick={handleClick}>Add Task</button>
            </div>
            { toggle &&
                <div>
                    {todoList.map((list, key) => (
                        <Task 
                            list={list} 
                            key={key}
                            handleDelete={() => handleDelete(key)}
                        />
                    ))}
                </div>
            }
            

            <div className="text-center"> 
                <button  className="bg-green-500 px-2 py-[10px] text-white font-semibold mt-20" onClick={handleToggle}>{ toggle ? 'Hide Task' : 'Show Task'}</button>
            </div>
           
        </div>
    )
}
export default Main;