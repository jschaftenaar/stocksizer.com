import { Positions, Size } from '../Actions';
import { uuid } from '../Utils/Random';

const PositionsReducer = (
  state = [],
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
