import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionTotal from '../../../Components/Size/PositionTotal';
import axios from 'axios';
import { 
  SizeSharesChange,
  SizeCommissionsChange,
} from '../../../Actions';

const  mapStateToProps = ({size}, {match}) => {
  return {
    commissions: size.commissions,
    shares: size.shares
  };
}

const mapDispatchToProps = dispatch => {
  return {
    sharesChange: event => dispatch(SizeSharesChange(event.target.value)),
    commissionsChange: event => dispatch(SizeCommissionsChange(event.target.value)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionTotal);
