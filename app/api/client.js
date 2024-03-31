import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://<YOUR_IP_ADDRESS>:9001/api",
});

export default apiClient;
