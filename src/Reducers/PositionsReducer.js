import { Positions } from '../Actions'

const PositionsReducer = (state = [{ticker: 'FB'},{ticker: 'IBM'}], action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default PositionsReducer;
