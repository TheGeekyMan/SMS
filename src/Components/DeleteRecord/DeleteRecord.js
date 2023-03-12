import { useState } from "react"
import { useDeleteStudent } from "../../hooks/useViewAll"
import './DeleteRecord.css';

export const DeleteRecord = () => {

    const [isId, setIsId] = useState('')

    const {mutate,isError,isSuccess} = useDeleteStudent()

    if(isError){
        return <h2>{"Please enter valid ID..."}</h2>
    }

    if(isSuccess){
        return <h2>{"ID deleted!!!"}</h2>
    }
    
    const deleteHandler = (e) => {
        e.preventDefault()
        mutate(isId);
        setIsId('');
    }

    return(
        <>
        <h2>Delete Student</h2>
        <div className="container">
            <label><b>Enter Id to delete</b></label>
            <input type="number" value={isId} onChange={(e)=>setIsId(e.target.value)}></input>
            <button className="btn-delete" onClick={(e)=>deleteHandler(e)}>Delete</button>
        </div>
        </>
    )
}