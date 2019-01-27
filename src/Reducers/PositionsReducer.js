import { Positions } from '../Actions'

const PositionsReducer = (
  state = [{
      ticker: 'FB',
      position: 'long',
      uuid: '20781ffe-7543-4ea2-8185-1db95a51b985'
    },{
      ticker: 'IBM',
      position: 'short',
      uuid: 'f0d4e3bc-33a3-4416-993d-47efd22a18db' 
    }],
    action
  ) => {
  switch (action.type) {
    default:
      return state
  }
}

export default PositionsReducer;
