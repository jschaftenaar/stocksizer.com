import React from 'react';
import PropTypes from 'prop-types';
import { id as randomId} from '../../Utils/Random';

const Radioinput = ({value, onChange, label, options}) => {
  const checks = options.map(option => {
    const id = randomId();
    return (
      <div className="form-check" key={id}>
        <input className="form-check-input" type="radio" id={id} value={option.value} onChange={onChange} checked={value===option.value}/>
        <label className="form-check-label" htmlFor={id}>
          {option.label}
        </label>
      </div>
    );
  });

  return (
    <div className="form-group row">
      <div className="col-form-label col-sm-6">{label}</div>
      <div className="col-sm-6">
        {checks}
      </div>
    </div>
  );
}

Radioinput.defaultProps = {
  placeholder: ''
};

Radioinput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.string
    })
  )
};

export default Radioinput;
