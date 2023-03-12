import axios from "axios";
import { useMutation } from "react-query";

const updateStudent = (id) => {
    return axios.patch(`https://my-json-server.typicode.com/TheGeekyMan/SMS/students/${id}`);
}

const deleteStudent = (id) => {
    return axios.delete(`https://my-json-server.typicode.com/TheGeekyMan/SMS/students/${id}`);
}

export const useUpdateStudent = () => {
    return useMutation(updateStudent);
}

export const useDeleteStudent = () => {
    return useMutation(deleteStudent)
}