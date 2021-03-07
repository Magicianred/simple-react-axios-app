import request from './BaseService'
import { constants } from '../shared/constants'

function getAll(size = 5) {
    return request({
        url: constants.paths.tags + '?size=' + size.toString(),
        method: 'GET',
    })
}

function get(id) {
    return request({
        url: constants.paths.tags.replace('{id}', id.toString()),
        method: 'GET',
    })
}

const TagsService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default TagsService
