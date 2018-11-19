import * as types from './types'
import vue from 'vue'

export const state = {
  eventos: []
}

export const mutations = {
  [types.SET_EVENTO] (state, params) {
    state.eventos.push(params)
  },
  [types.UPDATE_EVENTO] (state, params) {
    vue.set(state.eventos, params.index, params)
  },
  [types.REMOVE_EVENTO] (state, params) {
    vue.delete(state.eventos, params)
  }

}
