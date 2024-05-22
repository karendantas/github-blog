import axios from "axios";

export const apiUser = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export const apiPosts = axios.create({
    baseURL: 'https://api.github.com/repos/'
})