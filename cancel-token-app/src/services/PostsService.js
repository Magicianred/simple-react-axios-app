import axios from 'axios'
import request from './BaseService'
import { constants } from '../shared/constants'

function getAll() {
    const { CancelToken } = axios
    let cancel

    const cancelToken = new CancelToken((c) => {
        cancel = c
    })
    return [
        request({
            url: constants.paths.posts,
            method: 'GET',
            cancelToken,
        }),
        cancel,
    ]
}

function get(id) {
    const { CancelToken } = axios
    let cancel

    const cancelToken = new CancelToken((c) => {
        cancel = c
    })

    return [
        request({
            url: constants.paths.posts.replace('{id}', id.toString()),
            method: 'GET',
            cancelToken,
        }),
        cancel,
    ]
}

const PostsService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default PostsService
