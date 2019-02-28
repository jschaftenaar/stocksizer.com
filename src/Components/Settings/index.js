import React from 'react';
import Content from '../Content';
import Textinput from '../Textinput';

const Settings = ({
  saveCurrentSettings,
  resetCurrentSettings,
  currentSettingChange,
  accountSize,
  profitPercentage,
  accountStoplossPercentage,
  positionStoplossPercentage,
  stockPurchaseCommission,
  stockSellCommission
}) => {
  return (
  	<Content title='Settings' actionLabel='Reset' onAction={resetCurrentSettings}>
      <form onSubmit={saveCurrentSettings}>
        <div className="card-columns">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Account Details</h5>
              <Textinput
                label='Account Size'
                placeholder='Account Size'
                value={accountSize}
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { currentSettingChange(event, 'accountSize') } }
              />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Stop loss</h5>
              <Textinput
                label='Account Stop loss percentage'
                placeholder='account stop loss'
                value={accountStoplossPercentage}
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { currentSettingChange(event, 'accountStoplossPercentage') } }
              />
              <Textinput
                label='Position Stop loss percentage'
                placeholder='position stop loss'
                value={positionStoplossPercentage}
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { currentSettingChange(event, 'positionStoplossPercentage') } }
              />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profit Information</h5>
              The more risk, the more profit is required.
              <Textinput
                label='Profit percentage'
                placeholder='profit'
                value={profitPercentage}
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { currentSettingChange(event, 'profictPercentage') } }
              />
              Again the more risk, the more return is required.
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Commissions</h5>
              <Textinput
                label='Stock Purchase'
                placeholder='Stock Purchase'
                value={stockPurchaseCommission}
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { currentSettingChange(event, 'stockPurchaseCommission') } }
              />
              <Textinput
                label='Stock Sell'
                placeholder='Stock Sell'
                value={stockSellCommission}
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { currentSettingChange(event, 'stockSellCommission') } }
              />
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
