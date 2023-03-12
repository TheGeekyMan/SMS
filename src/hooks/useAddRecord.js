import { useMutation } from "react-query";
import axios from "axios";

const addStudentRecord = (student) => {
    return axios.post('http://localhost:4000/students',student)
}

export const useAddRecord = () => {
    return useMutation(addStudentRecord)
}