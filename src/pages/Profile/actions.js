import { GET_POST_BY_AUTHOR, SET_POST_BY_AUTHOR } from "./constant";

export const getPostByAuthor = (id) => ({
    type: GET_POST_BY_AUTHOR,
    id
})

export const setPostByAuthor = (post) => ({
    type: SET_POST_BY_AUTHOR,
    post
})