import React from 'react';
import Content from '../Content';
import PositionBasics from './PositionBasics';
import PositionPercentages from './PositionPercentages';
import style from './Size.module.scss';

const Size = () => {
  return (
    <Content title='Size Position'>
      <form>
        <div className="row">
          <PositionBasics/>
          <PositionPercentages/>
        </div>

        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label">Shares</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Shares"/>
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword3" className="col-sm-2 col-form-label">Commissions</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Commissions"/>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">Checkbox</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Add Position</button>
          </div>
        </div>
      </form>
      Ticker
      Long/Short
      Buy price
      Profit/Loss Percentage
      Share Count / set to profit, set to double profit over loss, set to max account size
      Commissions
    </Content>
  );
}

export default Size;
