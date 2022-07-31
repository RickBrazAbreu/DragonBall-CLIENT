import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllSayans = () => {
    return axios(`${apiUrl}/sayans`)
}

export const getOneSayan = (id) => {
    return axios(`${apiUrl}/sayans/${id}`)
}