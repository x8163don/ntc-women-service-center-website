import axios from "axios"

const wordpressApi = axios.create({
  baseURL:
    "https://public-api.wordpress.com/rest/v1.1/sites/ntccouncilofwomen.wordpress.com",
  timeout: 3000,
})

export const getPosts = (query) => wordpressApi.get("/posts", { params: query })
export const getPost = (id) => wordpressApi.get(`/posts/${id}`)
