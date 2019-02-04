import React from 'react';
import PropTypes from 'prop-types';
import { id as randomId } from '../../Utils/Random';

const Input = ({value, onChange, label, placeholder}) => {
  const id = randomId();
  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-sm-6 col-form-label">{label}</label>
      <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

Input.defaultProps = {
  placeholder: ''
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.node,
  onChange: PropTypes.func
};

export default Input;
