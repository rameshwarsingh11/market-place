import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://<YOUR_IP_ADDRESS>:9000/api'
})


export default apiClient;
