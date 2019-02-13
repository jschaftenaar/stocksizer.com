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


              <Textinput
                label='Account Stop loss percentage'
                placeholder='account stop loss'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
              />


              <Textinput
                label='Position Stop loss percentage'
                placeholder='position stop loss'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
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
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
              />
              Again the more rish, the more return is required.
            </div>
          </div>



          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Commissions</h5>

              <Textinput
                label='Stock Purchase'
                placeholder='Stock Purchase'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
              />

              <Textinput
                label='Stock Sell'
                placeholder='Stock Sell'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
              />



              <Textinput
                label='Option Purchase'
                placeholder='Option Purchase'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
              />


              <Textinput
                label='Option Sell'
                placeholder='Stock Sell'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
              />


              <Textinput
                label='ETF Purchase'
                placeholder='ETF Purchase'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
              />

              <Textinput
                label='ETF Purchase'
                placeholder='ETF Purchase'
                value={currentSettings.accountSize }
                appendLabel={(<i className="fas fa-dollar-sign"></i>)}
                onChange={(event) => { onChange(event, 'accountSize') } }
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
