import request from './BaseService'
import { constants } from '../shared/constants'

function getAll() {
  return request({
    url: constants.paths.posts,
    method: 'GET',
  })
}

function get(id) {
  return request({
    url: constants.paths.posts.replace('{id}', id.toString()),
    method: 'GET',
  })
}

const PostService = {
  getAll,
  get,
  // create, update, delete, etc. ...
}

export default PostService
