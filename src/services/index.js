import axios from "axios";

const baseUrl = "https://hn.algolia.com/api/v1"

export const getPosts = function (query) {
    return axios.get(`${baseUrl}/search?query=${query}`)
}


export const getPost = function (objectID) {
    return axios.get(`${baseUrl}/items/${objectID}`)
}