import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://<YOUR_IP_ADDRESS>:9000/api'
})

apiClient.get('/listings').then(response => {
    if (!response.ok) {
        response.problem
    }
})
