import React from 'react';
import style from './Add.module.scss';
import ContentHeader from '../ContentHeader';
import Input from '../Input.js';

const Add = () => {
  return (
    <div className={style.wrapper}>
      <ContentHeader title='Size Stock Position'/>
      <div className={style.content}>
        <Input/>
        Ticker
        Long/Short
        Buy price
        Profit/Loss Percentage
        Share Count / set to profit, set to double profit over loss, set to max account size
        Commissions
      </div>
    </div>
  );
}

export default Add;
