import React, { Component } from 'react';
import Input from './Input.js';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    let state={};
    try {
      if(window.location.hash) {
        let start=window.location.hash;
        start=atob(start.substr(1));
        state=JSON.parse(start);
      } else {
        state=JSON.parse(localStorage.getItem('buysell'));
      }
    } finally {
      state=Object.assign({
        price: 50,
        profitPercentage: 3,
        stoplossPercentage: 1,
        shares: 1,
        commission: 4.95,
        ticker: ''
      }, state);
    }
    this.state=state;
    this.onChange=this.onChange.bind(this);
    this.onRetrievePrice=this.onRetrievePrice.bind(this);
    this.calculateProfitDiff=this.calculateProfitDiff.bind(this);
    this.calculateProfitShares=this.calculateProfitShares.bind(this);
    this.calculateDoubleProfitShares=this.calculateDoubleProfitShares.bind(this);
    this.generateLink=this.generateLink.bind(this);
    this.copyToClipboard=this.copyToClipboard.bind(this);
  }

  onRetrievePrice(event) {
    event.preventDefault();
    axios.get(`https://api.iextrading.com/1.0/stock/${this.state.ticker.toUpperCase()}/price`)
    .then(result => {
      this.setState({price: result.data});
    });
  }

  generateLink() {
    let objJsonStr = JSON.stringify(this.state);
    let objJsonB64 = btoa(objJsonStr);
    const url = window.location.href.split('#')[0]
    return `${url}#${objJsonB64}`;
  }

  onChange(event, key) {
    event.preventDefault();
    const value=event.target.value;
    this.setState({[key]: value});
  }

  calculateProfitDiff(profitPercentage, price) {
    return parseFloat(price)/100*parseFloat(profitPercentage);
  }

  calculateLoss(stoplossPercentage, price, shares, commission) {
    return (parseFloat(shares)
      *(parseFloat(price)/100*parseFloat(stoplossPercentage))
      +(2*parseFloat(commission)));
  }

  calculateDoubleProfitShares() {
    let { stoplossPercentage, price, commission, profitPercentage } = this.state;
    let i = 0;
    let profit = -1*commission*2;
    let increase = this.calculateProfitDiff(profitPercentage, price);
    let loss = this.calculateLoss(stoplossPercentage, price, i, commission);
    while (profit<(loss*2)) {
      i++;
      profit += increase;
      loss = this.calculateLoss(stoplossPercentage, price, i, commission);
    }
    this.setState({shares:i});
  }

  calculateProfitShares() {
    let i = 0;
    let profit = 0;
    let commission = parseFloat(this.state.commission);
    let { profitPercentage, price } = this.state;
    let increase = this.calculateProfitDiff(profitPercentage, price);
    while (profit<(commission*2)) {
      i++;
      profit += increase;
    }
    this.setState({shares:i});
  }

  copyToClipboard() {
    try {
      const link = this.refs.link;
      link.select();
      document.execCommand('copy');
      link.blur();
    }
    catch (error) {
      // fail silent
    }
  }

  render() {

    localStorage.setItem('buysell',JSON.stringify(this.state));

    let { price, profitPercentage, stoplossPercentage, shares, commission }=this.state;
    price=parseFloat(price);
    commission=parseFloat(commission);
    profitPercentage=parseFloat(profitPercentage);
    stoplossPercentage=parseFloat(stoplossPercentage);

    const takeProfitAmount=(price/100*profitPercentage)+price;
    const stoplossAmount=price/100*(100-stoplossPercentage)
    const totalAmount=price*shares;
    const profitAfterCommissions=shares*(price/100*profitPercentage)-(2*commission);
    const lossAfterCommissions=shares*(price/100*stoplossPercentage)+(2*commission);

    let profitAlert = 'list-group-item';
    if (profitAfterCommissions<0) {
      profitAlert += ' list-group-item-danger';
    } else if (profitAfterCommissions<(lossAfterCommissions)) {
      profitAlert += ' list-group-item-warning';
    } else {
      profitAlert += '  list-group-item-primary';
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stock Sizer</h1>
        </header>
        <div className="jumbotron">
          <div className='container'>
            <p>Easily determine the price points take your profits or stop your loss. Next to this you can easily determine the minimum size of your positions that actually make a profit, which is very important in case you are working with smaller position sizes.</p>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg'>
              <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Profit/Stop Loss</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Set your profit and stop loss percentages</h6>
                  <p className="card-text">This is determined by your support and resistance. <a href="https://learn-plan-profit.teachable.com?affcode=140060_powg0qym" rel="noopener noreferrer" target="_blank">Learn more about support and resistance</a></p>
                  <Input
                    prepend='Profit'
                    append='%'
                    onChange={(event) => { this.onChange(event, 'profitPercentage') }}
                    value={this.state.profitPercentage}
                  />
                  <Input
                    prepend='Stop loss'
                    append='%'
                    onChange={(event) => { this.onChange(event, 'stoplossPercentage') }}
                    value={this.state.stoplossPercentage}
                  />
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  list-group-item-dark">
                    <h6>Take your profits at</h6>
                    ${parseFloat(takeProfitAmount).toFixed(3)}
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <h6>Set your stop loss at</h6>
                    ${parseFloat(stoplossAmount).toFixed(3)}
                  </li>
                </ul>
              </div>
              <br/>
            </div>
            <div className='col-lg'>
              <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Stock Price</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Set the price you purchases your stock at</h6>
                  <p className="card-text">Screen for a good stock and plug in its price down below</p>
                  <Input
                    prepend='Price'
                    append='$'
                    onChange={(event) => { this.onChange(event, 'price') }}
                    value={this.state.price}
                  />
                  <p>Alternatively you can use the ticker symbol to retrieve the latest market price from iex</p>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ticker"
                      onChange={(event) => { this.onChange(event, 'ticker') }}
                      value={this.state.ticker}
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary mb-2" onClick={this.onRetrievePrice}>Retrieve</button>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
            </div>
            <div className='col-lg'>
              <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Commission &amp; Shares</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Set shares count and commission amount</h6>
                  <p className="card-text">Determine the position size, potential profit, and potential loses. To trade without commissions and increase your overal profits use <a href="https://share.robinhood.com/jeroens5" target="_blank" rel="noopener noreferrer">Robinhood</a></p>
                  <Input
                    prepend='Shares'
                    append='count'
                    onChange={(event) => { this.onChange(event, 'shares') }}
                    value={this.state.shares}
                  />
                  <div className='button-container'>
                    <button onClick={this.calculateProfitShares} className="btn btn-primary btn-sm" type="submit">Set to Profit</button>
                    <button onClick={this.calculateDoubleProfitShares} className="btn btn-primary btn-sm" type="submit">Double Profit over Loss</button>
                  </div>
                  <Input
                    prepend='Commission'
                    append='$'
                    onChange={(event) => { this.onChange(event, 'commission') }}
                    value={this.state.commission}
                  />
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-dark">
                    <h6>Position Size</h6>
                    ${totalAmount.toFixed(2)}
                  </li>
                  <li className={profitAlert}>
                    <h6>Potential Profit</h6>
                    ${profitAfterCommissions.toFixed(3)}
                  </li>
                  <li className="list-group-item list-group-item-dark">
                    <h6>Potential Loss</h6>
                    ${lossAfterCommissions.toFixed(2)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br/>

          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Share with Friends</h5>
              <h6 className="card-subtitle mb-2">Use this link to share the above settings with friends</h6>

              <div className="input-group mb-3">
                <input
                  type='text'
                  ref='link'
                  onChange={(event) => { event.preventDefault() }}
                  className="form-control"
                  value={this.generateLink()}
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary mb-2" onClick={this.copyToClipboard}>Copy to clipboard</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
