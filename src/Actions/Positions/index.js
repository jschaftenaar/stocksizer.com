import { Positions } from '..';

export const deletePositionById = (uuid) => ({
  type: Positions.DELETE_POSITION,
  uuid,
});

export const addSize = (size) => ({
  type: Positions.ADD_SIZE,
  size
});

