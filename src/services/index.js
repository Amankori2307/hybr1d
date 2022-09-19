import axios from "axios";

const baseUrl = "http://hn.algolia.com/api/v1"

export const getPosts = function(query){
    return axios.get(`${baseUrl}/search?query=${query}`)
}