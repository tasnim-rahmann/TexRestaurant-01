import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const apiClient = () => {
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default apiClient;