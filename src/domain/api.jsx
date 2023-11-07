import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const urls = {
    user: 'user',
    posts: 'posts'
}

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
    const options = {
        baseURL,
        url: endpoint,
        method,
        params,
        headers,
        data
    };

    const response = await axios(options);
    return response?.data;
};

export const registerMethod = (user) => {
    return callAPI(urls.user, 'POST', {}, {}, user)
}

export const getAllUser = () => {
    return callAPI(urls.user, 'GET')
}

export const getAllPost = () => {
    return callAPI(urls.posts, 'GET')
}

export const getPostById = (id) => {
    return callAPI(`${urls.posts}/${id}`, 'GET')
}

export const createPost = (post) => {
    return callAPI(urls.posts, 'POST', {}, {}, post)
}

export const postByAuthor = (id) => {
    return callAPI(`${urls.posts}?authorId=${id}`, 'GET')
}




