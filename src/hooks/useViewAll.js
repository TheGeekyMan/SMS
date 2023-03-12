import axios from "axios";
import { useMutation } from "react-query";

const updateStudent = (id) => {
    return axios.patch(`http://localhost:4000/students/${id}`);
}

const deleteStudent = (id) => {
    return axios.delete(`http://localhost:4000/students/${id}`);
}

export const useUpdateStudent = () => {
    return useMutation(updateStudent);
}

export const useDeleteStudent = () => {
    return useMutation(deleteStudent)
}