import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const apiClient = () => {
    return axiosSecure;
};

export default apiClient;