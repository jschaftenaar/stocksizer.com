import React from 'react';
import Content from '../Content';
import Textinput from '../Textinput';

const Settings = ({onSave, currentSettings}) => {

  const onChange = (event) => {
    event.preventDefault();
  }

  return (
  	<Content title='Settings'
      actionLabel='Reset'
    >
      <form onSubmit={(event) => onSave(event, currentSettings)}>
        <div className="card-columns">




          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Account Details</h5>
              <Textinput
                label='Account Size'
                placeholder='Account Size'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }

              />
            </div>
          </div>



          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Stop loss</h5>

              set stop loss to % of your account 1% is common
              1% of your account size.

              set stop loss to % of your position size.

            </div>
          </div>




          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profit Information</h5>
              The more risk, the more profit is required.
              3% profit is a good target in most cases for stock purchases.
            </div>
          </div>



          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Commissions</h5>

              Commissions for purchase stock
              commissions for selling stock

              commissions for purchase option
              commissions for selling option

              etf purchase commissions
              etf sell commissions
            </div>
          </div>



        </div>



        <div className="form-group row">
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary"><i className="fas fa-save"></i> Save Settings</button>
            </div>
        </div>

      </form>


    </Content>
  );
}

export default Settings;
