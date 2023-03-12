import { useEffect, useState } from "react"
import { useUpdateStudent } from "../../hooks/useViewAll";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import './UpdateRecord.css'

export const UpdateRecord = () => {

    const[newname, SetName] = useState('');
    const[newcity, setCity] = useState('');
    const [isId, setIsId] = useState('');
    const[nameCheck, setNameCheck] = useState(false);
    const[cityCheck, setCityCheck] = useState(false);
    const [errorCheck,setErrorCheck] = useState(false);
    const [fetch,isFetch] = useState(false);

    const updateStudentHandler = (data) => {
        return axios.patch(`http://localhost:4000/students/${isId}`,data);
    }

    const fetchStudent = () => {
        return axios.get(`http://localhost:4000/students/${isId}`)
    }

    useEffect(()=>{
        if(isId){
            isFetch(true);
        }
        else{
            isFetch(false);
        }
    },[isId])
    

    const {data} = useQuery("details",fetchStudent,{enabled:fetch});
    console.log(data && data.data.name);

    const {mutate,isError,error,isLoading,isSuccess} = useMutation(updateStudentHandler)

    if(isLoading){
        return <h2>{"Loading..."}</h2>
    }
    
    if(isSuccess){
        return <h2>{"Student updated successfully..."}</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    // const {mutate} = useUpdateStudent()

    const upateStudent = (e) => {
        e.preventDefault();
        let name = newname === '' ? data && data.data.name : newname;
        let city = newcity === '' ? data && data.data.city : newcity;
        const student = {name, city}
        mutate(student)
    }

    return(
        <>
        <h2>Update Student</h2>
        <div className="container">
            <label><b>ID</b></label>
            <input type='number' value={isId} onChange={(e)=>setIsId(e.target.value)}></input> <br/>

            <p>which value you want to update</p>

            <input type="checkbox" onClick={()=>setNameCheck(!nameCheck)}></input>
            <label><b>Name</b></label> <br/>

            <input type="checkbox" onClick={()=>setCityCheck(!cityCheck)}></input>
            <label><b>City</b></label> <br/>

            {nameCheck && 
                <div>
                    <label><b>Enter New Name</b></label>
                    <input type="text" value={newname} onChange={(e)=>SetName(e.target.value)}></input>
                </div>
            }

            {cityCheck && 
                <div>
                    <label><b>Enter New City</b></label>
                    <input type="text" value={newcity} onChange={(e)=>setCity(e.target.value)}></input>
                </div>
            }

            {(!nameCheck && !cityCheck) ? <div><p>select something first</p></div> : ''}

            {isId && (newname && nameCheck) || (newcity && cityCheck) ? <button className="btn-add" onClick={(e)=>upateStudent(e)}>Update</button> : 
                        <button className="btn-add-disable1" disabled>Update</button>}
        </div>
        </>
    )
}