import axios from 'axios'

const url = 'http://localhost:8080/'

const axiosInstance = axios.create({
    baseURL: url
});

let items = [];

const listEmployees = async () => {
    try{
        const response = await axiosInstance.get('/funcionarios');
        items = response.data;
        return items;
    }catch (error) {
        console.log(error);
    }
};

const getItemsEmployee = async () => items;

const addEmployee = async (newOne) => {
    try {
        const response = await axiosInstance.post(`/funcionarios`, newOne);
        await listEmployees();
        return response.data;
        
    } catch (error) {
        console.log('Erro ao adicionar novo funcionário: ', error);
    }
};

const editEmployee = async (employee) => {
    try {
        const response = axiosInstance.put(`/funcionarios/${employee.id}`, employee);
        await listEmployees();
        return response.data;
    } catch (error) {
        console.log('Erro ao editar funcionário: ', error);
    }
};

const deleteEmployee = async (id) => {
    try {
        const response = axiosInstance.delete(`/funcionarios/${id}`);
        await listEmployees();
        return response.data;
    } catch (error) {
        console.log('Erro ao editar funcionário: ', error);
    }
};

export {listEmployees, getItemsEmployee, addEmployee, editEmployee, deleteEmployee}