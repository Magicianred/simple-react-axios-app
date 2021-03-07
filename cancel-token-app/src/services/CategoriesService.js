import axios from 'axios'
import request from './BaseService'
import { constants } from '../shared/constants'

function getAll(size = 5) {
    const { CancelToken } = axios
    let cancel

    const cancelToken = new CancelToken((c) => {
        cancel = c
    })
    return [
        request({
            url: constants.paths.categories + '?size=' + size.toString(),
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
            url: constants.paths.categories.replace('{id}', id.toString()),
            method: 'GET',
            cancelToken,
        }),
        cancel,
    ]
}

const CategoriesService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default CategoriesService
