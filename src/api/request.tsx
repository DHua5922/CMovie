import axios from "axios";

axios.interceptors.request.use(
    (request: any) => {
        request.url = process.env.REACT_APP_API_BASE_URL + request.url;
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);