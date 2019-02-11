import React from 'react';
import Content from '../Content';

const Settings = ({onSave, currentSettings}) => {
  return (
  	<Content title='Settings'>
      <form onSubmit={(event) => onSave(event, currentSettings)}>
        <div className="card-columns">


          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Account Size</h5>
              account size:
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
      </form>
    </Content>
  );
}

export default Settings;
