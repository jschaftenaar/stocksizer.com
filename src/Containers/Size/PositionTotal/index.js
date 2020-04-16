import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import PositionTotal from '../../../Components/PositionTotal';
import { 
  sharesChange,
  commissionsChange,
  commissionsTypeChange
} from '../../../Actions/Size';

const  mapStateToProps = ({size, settings}, {match}) => {

  console.log(settings);

  const maximumShares = 0;
  const minimumShares = 0;


  return {
    maximumShares,
    minimumShares,
    commissions: size.commissions,
    shares: size.shares,
    commissionsType: size.commissionsType
  };

}

const mapDispatchToProps = dispatch => {
  return {
    sharesChange: event => dispatch(sharesChange(event.target.value)),
    commissionsChange: event => dispatch(commissionsChange(event.target.value)),
    commissionsTypeChange: event => dispatch(commissionsTypeChange(event.target.value)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PositionTotal);
