import request from './BaseService'
import { constants } from '../shared/constants'

function getAll(size = 5) {
    return request({
        url: constants.paths.categories + '?size=' + size.toString(),
        method: 'GET',
    })
}

function get(id) {
    return request({
        url: constants.paths.categories.replace('{id}', id.toString()),
        method: 'GET',
    })
}

const CategoriesService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default CategoriesService
