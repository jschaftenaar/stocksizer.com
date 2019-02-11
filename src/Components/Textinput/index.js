import React from 'react';
import PropTypes from 'prop-types';
import { id as randomId } from '../../Utils/Random';

const Input = ({value, onChange, label, placeholder, actionLabel, onAction, appendLabel}) => {
  const id = randomId();

  const action = actionLabel!==''
    ? (<div className="input-group-append">
        <button type="submit" className="btn btn-primary mb-2" onClick={onAction}>{actionLabel}</button>
      </div>)
    : '';

  const append = appendLabel !==''
    ? (<div className="input-group-append">
          <span className="input-group-text">{appendLabel}</span>
      </div>)
    : '';


  return (
    <div className="form-group row">
      <label htmlFor={id} className="col-sm-6 col-form-label">{label}</label>
      <div className="col-sm-6 input-group">
        <input
          type="text"
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {action}
        {append}
      </div>
    </div>
  );
}

Input.defaultProps = {
  placeholder: '',
  label: '',
  actionLabel: '',
  onChange: () => {},
  onAction: () => {},
  appendLabel: ''
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.node,
  onChange: PropTypes.func,
  actionLabel: PropTypes.node,
  onAction: PropTypes.func,
  append: PropTypes.node
};

export default Input;
