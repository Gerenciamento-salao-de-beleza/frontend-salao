import axios from "axios";

const url = 'http://localhost:8080/'

const axiosInstance = axios.create({
    baseURL: url
});

let items = [];

const listScheduling = async () => {
    try {
        const response = await axiosInstance.get('/agendamentos');
        items = response.data;
        return items;
        
    } catch (error) {
        console.log('Erro ao listar agendamentos: ', error);
        return [];
    }
};

const getItemsScheduling = async () => items;

const addScheduling = async (newOne) => {
    try {
        const response = await axiosInstance.post(`/agendamentos`, newOne);
        await listScheduling();
        return response.data;
        
    } catch (error) {
        console.log('Erro ao adicionar novo agendamento: ', error);
    }
};

const editScheduling = async (scheduling) => {
    try {
        const response = await axiosInstance.put(`/agendamentos/${scheduling.id}`, scheduling);
        await listScheduling();
        return response.data;
    } catch (error) {
        console.log('Erro ao editar agendamento: ', error);
    }
};

const deleteScheduling = async (id) => {
    try {
        const response = await axiosInstance.delete(`/agendamentos/${id}`);
        await listScheduling();
        return response.data;
    } catch (error) {
        console.log('Erro ao deletar agendamento: ', error);
    }
};

export { listScheduling, getItemsScheduling, addScheduling, editScheduling, deleteScheduling }