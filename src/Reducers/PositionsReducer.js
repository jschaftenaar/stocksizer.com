import { Positions, Size } from '../Actions';
import { uuid } from '../Utils/Random';

const PositionsReducer = (
  state = [{
      ticker: 'FB',
      positionType: 'long',
      uuid: '20781ffe-7543-4ea2-8185-1db95a51b985'
    },{
      ticker: 'IBM',
      positionType: 'short',
      uuid: 'f0d4e3bc-33a3-4416-993d-47efd22a18db' 
    }],
    action
  ) => {
  switch (action.type) {
    case Size.ADD_TO_POSITIONS: 
      let newArray = state.slice();
      action.position.uuid = uuid();
      newArray.push(action.position);
      return newArray;
    default:
      return state
  }
}

export default PositionsReducer;
