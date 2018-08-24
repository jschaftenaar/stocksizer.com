import React, { Component } from 'react';
import logo from './logo.svg';
import Input from './Input.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    let state = {};
    try {
      state = JSON.parse(localStorage.getItem('buysell'));
      console.log(state);
    } finally {
      state = Object.assign(state || {}, {
        price: 10,
        profitPercentage: 2,
        stoplossPercentage: .5,
        shares: 50,
        commission: 4.95
      });
    }

    this.state = state;
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, key) {
    event.preventDefault();
    const value = event.target.value;
    this.setState({[key]: value});
  }

  render() {
    let { price, profitPercentage, stoplossPercentage, shares, commission } = this.state;
    price = parseFloat(price);
    commission = parseFloat(commission);
    profitPercentage = parseFloat(profitPercentage);
    stoplossPercentage = parseFloat(stoplossPercentage);

    const takeProfitAmount = (price/100*profitPercentage)+price;
    const stoplossAmount = price/100*(100-stoplossPercentage)
    const totalAmount = price*shares;

    const potentialProfitAmount = shares*(price/100*profitPercentage);
    const potentialLossAmount =  shares*(price/100*stoplossPercentage);

    const profitAfterCommissions = shares*(price/100*profitPercentage)-(2*commission);
    const lossAfterCommissions = shares*(price/100*stoplossPercentage)+(2*commission);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <Input
                prepend = 'Profit'
                append = '%'
                onChange = {(event) => { this.onChange(event, 'profitPercentage') }}
                value = {this.state.profitPercentage}
              />

              Take your profits at:
              ${parseFloat(takeProfitAmount).toFixed(3)}

              Potential Profit
              ${potentialProfitAmount.toFixed(2)}

              Profit After Commissions
              ${profitAfterCommissions.toFixed(3)}
            </div>
            <div className='col-sm'>

              <Input
                prepend = 'Price'
                append = '$'
                onChange = {(event) => { this.onChange(event, 'price') }}
                value = {this.state.price}
              />

              <Input
                prepend = 'Shares'
                append = 'count'
                onChange = {(event) => { this.onChange(event, 'shares') }}
                value = {this.state.shares}
              />

              <Input
                prepend = 'Commission'
                append = '$'
                onChange = {(event) => { this.onChange(event, 'commission') }}
                value = {this.state.commission}
              />



              Total cost
              ${parseFloat(totalAmount).toFixed(3)}

            </div>

            <div className='col-sm'>

              <Input
                prepend = 'Stop loss'
                append = '%'
                onChange = {(event) => { this.onChange(event, 'stoplossPercentage') }}
                value = {this.state.stoplossPercentage}
              />

              Set stop loss to:
              ${parseFloat(stoplossAmount).toFixed(3)}

              Potential Loss
              ${potentialLossAmount.toFixed(2)}

              Loss After Commissions
              ${lossAfterCommissions.toFixed(2)}

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
