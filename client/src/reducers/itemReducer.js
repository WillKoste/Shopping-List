import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
  items: [
    {id: uuid(), name: ':)'},
    {id: uuid(), name: 'Please Work'},
    {id: uuid(), name: 'WHY DOES IT WORK NOW????'},
    {id: uuid(), name: 'just a bug?'}
  ]
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state;
  }
}