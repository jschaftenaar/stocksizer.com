import React from 'react';
import style from './Overview.module.scss';

const Overview = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.intro}>
        <p>Easily determine the price points take your profits or stop your loss. Next to this you can easily determine the minimum size of your positions that actually make a profit, which is very important in case you are working with smaller position sizes.</p>
        <p>This site is created as a hobby project just for fun. Buy me a coffee, lunch or anything really <a href="https://www.buymeacoffee.com/jschaftenaar">https://www.buymeacoffee.com/jschaftenaar</a> or paypal a million dollars or any amount at <a href="http://paypal.me/jschaftenaar/1000000">paypal.me/jschaftenaar</a></p>
        <p>As data source I am using <a href="https://www.alpaca.markets.org/">Alpaca</a></p>
        <p>You can probably find the source code for this thing on <a href="https://github.com/jschaftenaar/stocksizer.com">github</a></p>
        <p>Future plan/todo list</p>
        <ul className="list-group">
          <li className="list-group-item">Persistent Storage</li>
          <li className="list-group-item">Options</li>
          <li className="list-group-item">Crypto</li>
          <li className="list-group-item">Chad it up</li>
        </ul>
      </div>
    </div>
  );
}

export default Overview;
