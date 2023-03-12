import { useState } from "react";
import { useAddRecord } from "../../hooks/useAddRecord";
import './AddRecord.css'

export const AddRecord = () => {

    const [name,setName] = useState('');
    const [city, setCity] = useState('');
    const [hasName, setHasName] = useState('')
    const [hasCity, setHasCity] = useState('')

    const {mutate:addStudent,isLoading, isSuccess, isError,error} = useAddRecord()

    if(isLoading){
        return <h2>{"Loading..."}</h2>
    }
    
    if(isSuccess){
        return <h2>{"Student added successfully..."}</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    const addStudentRecord = () => {
        console.log(name,city);
        const student = {name, city}
        addStudent(student);
        setName('')
        setCity('')
    }

    return(
    <>
        <h2>Add Student</h2>
        <div className="container">
            <label><b>Enter Students Name</b></label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value);setHasName(e.target.value)}}/> <br/>

            <label><b>Enter Students City</b></label>
            <input type='text' value={city} onChange={(e)=>{setCity(e.target.value);setHasCity(e.target.value)}}/> <br/>

            {hasName && hasCity ? <button className="btn-add" onClick={()=>addStudentRecord()}>Add Student</button>:
                        <button className="btn-add-disable" disabled>Add Student</button>}
        </div>
    </>
    )
}