import axios from "axios";

const baseUrl = 'https://restcountries.com/v3.1/all'
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = (newObj) => axios.post(baseUrl, newObj)
const update = (id, newObj) => axios.put(`${baseUrl}/${id}`, newObj)
const remove = (id) => axios.delete(`${baseUrl}/${id}`)

export default {getAll, create, update, remove}