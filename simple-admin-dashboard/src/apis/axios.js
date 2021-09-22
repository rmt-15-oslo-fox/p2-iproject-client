import axios from "axios"

const BASE_URL = "https://simple-dashboard-admin.herokuapp.com"

const instance = axios.create({
    baseURL: BASE_URL
})

export default instance