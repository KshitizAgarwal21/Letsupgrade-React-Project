import axios from "axios";

// LocalStorageService

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//You make axios call from any of the component
//the interceptor is sitting and listening to any outgoing call
//the interceptor will intercept the request object from the api call and attach the token in the headers
