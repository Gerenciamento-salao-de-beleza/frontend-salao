import axios from "axios";

const url = 'http://localhost:8080/'

const axiosInstance = axios.create({
    baseURL: url
})

const listScheduling = async () => {
    try {
        const response = await axiosInstance.get('/agendamentos');
        console.log(response.data);
        return response.data
        
    } catch (error) {
        console.log('Erro ao listar agendamentos: ', error);
    }
}

export { listScheduling }