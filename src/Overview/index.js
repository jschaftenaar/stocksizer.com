import React from 'react';
import style from './Overview.module.scss';

const Overview = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.intro}>
        Easily determine the price points take your profits or stop your loss. Next to this you can easily determine the minimum size of your positions that actually make a profit, which is very important in case you are working with smaller position sizes.
      </div>
    </div>
  );
}

export default Overview;
