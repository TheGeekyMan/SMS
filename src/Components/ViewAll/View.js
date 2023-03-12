import { useQuery } from 'react-query';
import axios from 'axios';
import './View.css'
import { useNavigate } from 'react-router-dom';

export const View = () => {

    const navigate = useNavigate();

    const fetchStudent = () => {
        return axios.get("http://localhost:4000/students");
    }

    const {isLoading, data, isError, error} = useQuery("students",fetchStudent);

    return(
        <>
        <h2>View All Students</h2>
            <table className='viewAllTable'>
                <tbody>
                <tr>
                    <th className='title'>ID</th>
                    <th className='title'>Name</th>
                    <th className='title'>City</th>
                </tr>
                {data && data.data.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td className='item-value'>{item.id}</td>
                            <td className='item-value'>{item.name}</td>
                            <td className='item-value'>{item.city}</td>
                        </tr>
                        )
                    })}
                    </tbody>
                    </table>
                    </>
    )
}