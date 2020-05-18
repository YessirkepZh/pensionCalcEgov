import React from 'react';
import TextField from '@material-ui/core/TextField';
import InfoBlock from './InfoBlock';

export default ({ obj }) => 
<div className="uk-text-small uk-margin-small-bottom">

  <div  className="uk-flex uk-flex-column uk-width-expand" >
    <div className=" uk-text-primary uk-text-light titleRes uk-heading-bullet">возраст и дата выхода на пенсию (ОПВ/ОППВ)<InfoBlock text="Добровольные пенсионные взносы"/></div>
    <div className="uk-text-small uk-margin-small-left"><span className="uk-text-bold uk-text-emphasis ">12</span> лет <span className="uk-text-bold uk-text-emphasis ">12.12.2025</span></div>
  </div>

  <div  className="uk-flex uk-flex-column uk-width-expand" >
    <div className=" uk-text-primary uk-text-light titleRes uk-heading-bullet">возраст и дата начала получения выплат по ДПВ<InfoBlock text="Добровольные пенсионные взносы"/></div>
    <div className="uk-text-small uk-margin-small-left"><span className="uk-text-bold uk-text-emphasis ">12</span> лет <span className="uk-text-bold uk-text-emphasis ">12.12.2025</span></div>
  </div>

  <div  className="uk-flex uk-flex-column uk-width-expand" >
    <div className=" uk-text-primary uk-text-light titleRes uk-heading-bullet">количество лет до исчерпания накоплений по ОПВ<InfoBlock text="Добровольные пенсионные взносы"/> </div>
    <div className="uk-text-small uk-text-emphasis uk-text-bold uk-margin-small-left">12.12.2025</div>
  </div>

  <div  className="uk-flex uk-flex-column uk-width-expand" >
    <div className=" uk-text-primary uk-text-light titleRes uk-heading-bullet">количество лет до исчерпания накоплений по ОППВ<InfoBlock text="Добровольные пенсионные взносы"/></div>
    <div className="uk-text-small uk-text-emphasis uk-text-bold uk-margin-small-left">12.12.2025</div>
  </div>
  
  <div  className="uk-flex uk-flex-column uk-width-expand" >
    <div className=" uk-text-primary uk-text-light titleRes uk-heading-bullet">количество лет до исчерпания накоплений по ДПВ<InfoBlock text="Добровольные пенсионные взносы"/> </div>
    <div className="uk-text-small uk-text-emphasis uk-text-bold uk-margin-small-left">12.12.2025</div>
  </div>
  
</div>;