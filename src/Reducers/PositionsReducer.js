import { Positions } from '../Actions';
import { uuid } from '../Utils/Random';

const PositionsReducer = (
  state = [],
  action
) => {
  let newArray = state.slice();
  switch (action.type) {
    case Positions.DELETE_POSITION:
      return newArray.filter(position => position.uuid!==action.uuid);

    case Positions.ADD_SIZE:
      console.log('adding position');
      console.log(action);
      const newPosition = {...action.size};
      newPosition.uuid = uuid();
      newArray.push(newPosition);
      return newArray;
    default:
      return state
  }
}

export default PositionsReducer;
