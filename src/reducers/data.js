import dataSchema from '../schemas/index'
import {fromJS} from 'immutable'
import {SEARCH_VIDEO} from '../action-types/index'

const inicialState = fromJS({
  entities: dataSchema.entities,
  categories: dataSchema.result.categories,
  search: ''
})

function data(state = inicialState, action){
  switch (action.type) {
    case SEARCH_VIDEO:{
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}

export default data
