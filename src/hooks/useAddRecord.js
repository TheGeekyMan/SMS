import { useMutation } from "react-query";
import axios from "axios";

const addStudentRecord = (student) => {
    return axios.post('https://my-json-server.typicode.com/TheGeekyMan/SMS/students',student)
}

export const useAddRecord = () => {
    return useMutation(addStudentRecord)
}