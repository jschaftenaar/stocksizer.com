import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionTotal from '../../../Components/Size/PositionTotal';
import { 
  sharesChange,
  commissionsChange,
} from '../../../Actions/Size';

const  mapStateToProps = ({size}, {match}) => {
  return {
    commissions: size.commissions,
    shares: size.shares
  };
}

const mapDispatchToProps = dispatch => {
  return {
    sharesChange: event => dispatch(sharesChange(event.target.value)),
    commissionsChange: event => dispatch(commissionsChange(event.target.value)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionTotal);
