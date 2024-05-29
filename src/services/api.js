import axios from "axios";

export const apiCatImg = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images/search",
    timeout: 8000,
})

export const apiCatMsg = axios.create({
    baseURL: "https://meowfacts.herokuapp.com/",
    timeout: 8000,
})
