import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import Size from '../../Components/Size';
import { addSize } from '../../Actions/Positions';
import { reset } from '../../Actions/Size';

const mapStateToProps = ({size, settings, positions}) => {
  const isStored = positions.find(item => {
    return item.uuid === size.uuid;
  });

  if (isStored) {
    return { redirect: `/position/${size.uuid}`};
  }

  return {
    position: size,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (event, size) => {
      event.preventDefault();
      dispatch(addSize(size));
      dispatch(reset());
    },
    onReset: (event) => {
      dispatch(reset());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Size);
