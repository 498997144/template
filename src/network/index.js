import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.defaults.timeout = 15000
axios.defaults.withCredentials=true
axios.defaults.crossDomain=true

// axios.interceptors.request.use((config)=>{
//     const token = sessionStorage.getItem('token')
//     if(token){
//         config.headers.Authorization = token
//     }
//     return config
// })

axios.interceptors.response.use((response)=>{
    if(response.status == 200){
        return response.data
    }
})

Vue.prototype.axios = axios