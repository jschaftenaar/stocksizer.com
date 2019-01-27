import React from 'react';
import style from './Size.module.scss';
import ContentHeader from '../ContentHeader';
import Input from '../Input.js';

const Size = () => {
  return (
    <div className={style.wrapper}>
      <ContentHeader title='Size Position'/>
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

export default Size;
