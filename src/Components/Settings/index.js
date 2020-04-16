import React from 'react';
import Content from '../Content';
import Textinput from '../Textinput';

const Settings = ({
  saveCurrentSettings,
  resetCurrentSettings,
  currentSettingChange,
  accountSize,
  profitPercentage,
  accountRiskLimit,
  defaultTakeProfitPercentage,
  defaultStoplossPercentage,
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
              <Textinput
                label='Account Risk Limit'
                placeholder='Account Risk Limit'
                value={accountRiskLimit}
                appendLabel={(<i className="fas fa-percentage"></i>)}
                onChange={(event) => { currentSettingChange(event, 'accountRiskLimit') } }
              />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Default Entry/Exit</h5>
              <Textinput
                label='Take Profit Percentage'
                placeholder='Take Profit'
                value={defaultTakeProfitPercentage}
                appendLabel={(<i className="fas fa-percentage"></i>)}
                onChange={(event) => { currentSettingChange(event, 'defaultTakeProfitPercentage') } }
              />
              <Textinput
                label='Stop Loss Percentage'
                placeholder='Stop Loss'
                value={defaultStoplossPercentage}
                appendLabel={(<i className="fas fa-percentage"></i>)}
                onChange={(event) => { currentSettingChange(event, 'defaultStoplossPercentage') } }
              />
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
