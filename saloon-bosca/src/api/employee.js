import axios from 'axios'

const url = 'http://localhost:8080/'

const axiosInstance = axios.create({
    baseURL: url
})

const listEmployees = async () => {
    try{
        const response = await axiosInstance.get('/funcionarios');
        console.log(response.data);
        
        return response.data;
    }catch (error) {
        console.log(error);
    }
}
listEmployees()

export default listEmployees