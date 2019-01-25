import React from 'react';
import style from './Settings.module.scss';
import ContentHeader from '../ContentHeader';

const Settings = () => {
  return (
    <div className={style.wrapper}>
      <ContentHeader title='Settings'/>
      <div className={style.content}>
        <p>Some content goes here</p>
      </div>
    </div>
  );
}

export default Settings;
