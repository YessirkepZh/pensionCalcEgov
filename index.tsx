import React, { Component } from 'react';
import { render } from 'react-dom';
import InputSum from './InputSum';
import InputExp from './InputExp';
import InputSalary from './InputSalary';
import SelectPeriod from './SelectPeriod';
import InfoBlock from './InfoBlock';

import './style.css';
import ReactDOM from 'react-dom';
interface AppProps { 

}
interface AppState {
  Sex:string;
  BirthDate: string;
  Exp1998:string;
  ExpYear:string;
  AverageSal:string;
  EnlargeSal:boolean;
  EnlargeType:boolean;
  EnlargeTenge:string;
  EnlargePercent:string;
  PeriodPayOPV:string;
  OPV:boolean;
  SumOPV:string;
  OPPV:boolean;
  SumOPPV:string;
  DPV:boolean;
  SumDPV:string;
  SumDPVtype:boolean;
  SumDPVtenge:string;
  SumDPVpercent:string;
  PeriodPayDPV:string;
  PayoutAge:string;
  PayoutMonth:string;
  Lang:string;
  CalcType:string;
  email:string;
}


class App extends Component<AppProps, AppState, > {
  constructor(props) {
    super(props);
    this.state = {
     Sex:"M",
     BirthDate:"12.12.1970",
     Exp1998:"2.00",
     ExpYear:"12.00",
     AverageSal:"122222",
     EnlargeSal:false,
     EnlargeType:true,
     EnlargeTenge:"0",
     EnlargePercent:"0",
     PeriodPayOPV:"12",
     OPV:true,
     SumOPV:"",
     OPPV:false,
     SumOPPV:"0",
     DPV:true,
     SumDPV:"1231231",
     SumDPVtype:false,
     SumDPVtenge:"10000",
     SumDPVpercent:"0",
     PeriodPayDPV:"1",
     PayoutAge:"66",
     PayoutMonth:"60000",
     Lang:"1",
     CalcType:"1",
     email:"esik.95.kz@gmail.com"
    };
  
  }
  handleChange(event) {
   
  }

  handleSubmit(event) {

  }
  render() {
    return (
      <div className="uk-container uk-container-small uk-margin-small-top">
        <div className="uk-card uk-card-default">
          <form onSubmit={this.handleSubmit} className="uk-margin-small-left uk-margin-small-right">

            <h4 className="uk-heading-line uk-text-center"><span>Входные данные</span></h4>

              <InputExp val={this.state.SumOPV} handleChange={this.handleChange} title="Трудовой стаж до 1998 года"/>

              <InputExp val={this.state.SumOPV} handleChange={this.handleChange} title="Стаж в накопительной пенсионной системе с 1998 года"/>

              <InputSalary val={this.state.SumOPV} handleChange={this.handleChange} title="Средняя заработная плата в месяц, применяемая для исчисления (брутто) "/>

              <div className="uk-flex uk-flex-column">

                <span className="uk-text-small uk-text-primary">периодичность взносов: <InfoBlock text="Добровольные пенсионные взносы"/></span>

                <SelectPeriod val="12" handleChange={this.handleChange} classN="uk-select uk-form-small uk-margin-small-top uk-margin-small-bottom uk-text-right uk-width-1-5"/>
                
              </div>

              <ul uk-accordion="multiple: true" className="uk-margin-remove-top">
                <li className="uk-open">
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">Обязательные пенсионные взносы (ОПВ) </a>
                    <div className="uk-accordion-content">
                      <InputSum val={this.state.SumOPV} handleChange={this.handleChange}/>
                    </div>
                </li>

                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">Обязательные профессиональные пенсионные взносы (ОППВ) </a>
                    <div className="uk-accordion-content">
                        <InputSum val={this.state.SumOPPV} handleChange={this.handleChange}/>
                    </div>
                </li>

                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">Добровольные пенсионные взносы (ДПВ) </a>
                    <div className="uk-accordion-content">
                        <InputSum val={this.state.SumDPV} handleChange={this.handleChange}/>

                        <div className="uk-flex uk-flex-left uk-margin-small-top uk-text-small">
                          <div className="uk-flex uk-flex-column">
                            <span>возраст получения:</span>
                            <input type="text" value={this.state.SumDPV} className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small"/>
                          </div>

                          <div className="uk-flex uk-flex-column uk-margin-small-left">
                            <span>периодичность взносов:</span>
                             <SelectPeriod val="12" handleChange={this.handleChange} classN="uk-select uk-form-small uk-margin-small-top uk-margin-small-bottom uk-text-right uk-width-1-2"/>
                          </div>
                        </div>

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small uk-margin-small-top">
                          <span>сумма добровольных взносов:
                            <InfoBlock text="Добровольные пенсионные взносы"/>
                          </span>
                          <input type="text" value={this.state.SumDPV} className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small"/>
                        </div>

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small uk-margin-small-top">
                          <span>желаемая ежемесячная выплата в тенге:
                            <InfoBlock text="Добровольные пенсионные взносыДобровольные пенсионные взносыДобровольные пенсионные взносы"/>
                          </span>
                          <input type="text" value={this.state.SumDPV} className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small"/>
                        </div>


                    </div>
                </li>
            </ul>

            <div className="uk-flex uk-flex-around">
              <button  className = "uk-button uk-button-danger uk-margin-small-bottom uk-button-small uk-text-center">Сбросить</button>  
              <button type="submit" className = "uk-button uk-button-primary uk-margin-small-bottom uk-button-small uk-text-center">Рассчитать</button>   
            </div>  

          </form>
        </div>
        
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
