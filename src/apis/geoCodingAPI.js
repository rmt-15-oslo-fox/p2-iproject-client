import axios from "axios"

const instance = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {
        key: 'AIzaSyDCDpW1pT8Z8ijRP6NG6rjAWvzwu1pd9gI'
    }
})

export default instance