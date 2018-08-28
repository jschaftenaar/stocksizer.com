import React from 'react';

const Input = ({prepend, append, value, onChange}) => {
  const renderPrepend=(text) =>{
    if (text!=='') {
      return (
        <div className="input-group-prepend">
          <span className="input-group-text">{text}</span>
        </div>
      );
    }
  };

  const renderAppend=(text) =>{
    if (text!=='') {
      return (
        <div className="input-group-append">
          <span className="input-group-text">{text}</span>
        </div>
      );
    }
  };

  return (
    <div className="input-group mb-3">
      {renderPrepend(prepend)}
      <input
        type="text"
        className="form-control"
        placeholder=""
        onChange={onChange}
        value={value}
        />
      {renderAppend(append)}
    </div>
  );
}

export default Input;


