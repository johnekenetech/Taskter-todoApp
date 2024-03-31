import { useState } from "react"


const Task = ({list, handleDelete}) => {
    const [isDone, setIsDone] = useState(false)

    const handleDone = () => {
        setIsDone(!isDone)
    }
    return(
        <div className="flex justify-between items-center mb-8">
            <h1 className={`text-white px-4 ${ isDone ? 'line-through text-green-600' : ''} sm:text-[18px] md:text-[20px] lg:text-[22px]`}>{list}</h1>
            <div className="flex items-center text-white">
                <button className="bg-green-500 px-2 mr-4 font-bold md:px-3 md:py-1" onClick={handleDone}>{isDone ? 'Undo' : 'Done'}</button>
                <button  className="bg-red-300 px-4 text-red-600 font-bold md:px-5 md:py-1" onClick={handleDelete}>X</button>
            </div>
        </div>
    )

}

export default Task;