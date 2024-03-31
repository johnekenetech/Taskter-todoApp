import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    
    const handleChange = (e) => {
       setName(e.target.value)
    }
    const handleNavigate = () => {
        if(name == ''){
            const nameInput = document.querySelector('#nameInput')
            nameInput.placeholder = 'Enter name to proceed'
        }else{
            navigate('main', {state: {name}})
        }
       
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="text-center">
                    <h1 className="text-5xl mb-7 text-green-400 sm:text-7xl sm:mb-9 ">Tasker</h1>
                    <p className="text-white text-4xl leading-[60px] sm:text-5xl sm:leading-[75px]">Manage your <span className="text-green-400 border-b border-white-700"> Tasks </span><br/> with ease.</p>
                    
                    <input type='text' id="nameInput" placeholder="Enter name" value={name} className=" font-semibold outline-none mt-8 pl-4 py-1 sm:pl-10 sm:py-2 md:px-10" onChange={handleChange} name={name}/>
                    <div className="flex justify-center mt-12 sm:mt-16">
                        <img src="src\enter.png" alt="" className="sm:w-[75px] cursor-pointer" onClick={handleNavigate}/>
                    </div>
               
            </div> 
        </div>
        

    )
}

export default Home;