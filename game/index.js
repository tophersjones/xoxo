import {Map} from 'immutable'
import {createStore} from 'redux'

export default function reducer(state={turn: 'X', board: Map()}, action) {
  // TODO
  if(action.type === 'MOVE') return {turn: state.turn === 'X' ? 'O' : 'X', board: state.board.setIn([], state.turn)}   
  return state
}

export const move = (position,player) =>{
  return{type: 'MOVE', position, player}
}

