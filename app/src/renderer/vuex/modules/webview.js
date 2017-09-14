import * as types from '../mutation-types'

const state = {
  url: 'http://www.baidu.com'
}

const mutations = {
  [types.SET_URL] (state, url) {
    state.url = url
  }
}

export default {
  state,
  mutations
}
