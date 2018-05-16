import {Map} from 'immutable'
import {createStore} from 'redux'

export default function reducer(state={turn: 'X', board: Map()}, action) {
  // TODO
  const newBoard = state.board.setIn(action.position, action.player)
  if (action.type === 'MOVE') {
    console.log('ONGOING', ongoing)
    return { turn: state.turn === 'X' ? 'O' : 'X', board: newBoard, winner: winner(newBoard) } 
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

function streak (board, firstCoord, ...restCoords) {
  const player = board.getIn(firstCoord)
  if (player) {
    for (let i = 0; i < restCoords.length; i++) {
      if (board.getIn(restCoords[i]) !== player) {
        return null
      }
    }
    return player
  }
  return null
}

function winner(board) {
  for (let i = 0; i < 3; i++) {
    let column = streak(board, [0, i], [1, i], [2, i])
    if (column) return column
    let row = streak(board, [i, 0], [i, 1], [i, 2])
    if (row) return row
  }
  let diaganolOne = streak(board, [0, 0], [1, 1], [2, 2])
  if (diaganolOne) return diaganolOne
  let diaganolTwo = streak(board, [0, 2], [1, 1], [2, 0])
  if (diaganolTwo) return diaganolTwo
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!board.hasIn([i, j])) {
        return null
      }
    }
  }
  return 'draw'
}
