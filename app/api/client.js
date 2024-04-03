import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.20.10.5:9001/api",
});

export default apiClient;
