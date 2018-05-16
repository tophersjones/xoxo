import {Map} from 'immutable'
import {createStore} from 'redux'

export default function reducer(state={turn: 'X', board: Map()}, action) {
  // TODO
  if (action.type === 'MOVE') {
    if (action.player === 'X') {
      ongoing['X'].push(action.position)
    } else {
      ongoing['O'].push(action.position)
    }
    winner()
    console.log('ONGOING', ongoing)
    return { turn: state.turn === 'X' ? 'O' : 'X', board: state.board.setIn(action.position, action.player) } 
  } 
  return state
}

export const move = (player, position) => {
  return {type: 'MOVE', position, player}
}

const ongoing = {
  X: [],
  O: []
}

function winner() {
  let xArr = ongoing['X']
  let oArr = ongoing['O']
  let xCounter = 0
  let oCounter = 0
  for (let i = 1; i < xArr.length; i++) {
    if (xArr[i][0] === xArr[i-1][0]) {
      xCounter++
    } else {
      xCounter = 0
    }
    if (xCounter === 2) {
      console.log('X wins')
    
    }
  }
}