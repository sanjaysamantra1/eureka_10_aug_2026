import axios from "axios";
import { loggerInterceptor } from "./logger";
import { authInterceptor } from "./authinterceptor";
import { errorHandler } from "./errorHandler";
import { retry } from "./retry";

const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    timeout: 10000,
    headers: { accept: "Application/json" }
});

// Request Interceptors
client.interceptors.request.use(authInterceptor);
client.interceptors.request.use(loggerInterceptor);

// Response Interceptors
// client.interceptors.response.use(response=>response , errorHandler);
client.interceptors.response.use(response=>response , retry);

export default client;