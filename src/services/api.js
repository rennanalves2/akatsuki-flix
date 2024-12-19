import axios from "axios";

const api = axios.create({
    baseURL: "https://narutodb.xyz/api/"
});

export default api;