import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
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
     SumOPV:"20000000",
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
          <form onSubmit={this.handleSubmit}>
            <h4 className="uk-heading-line uk-text-center"><span>Входные данные</span></h4>
            <div className="uk-flex">
            </div>
              <ul uk-accordion="multiple: true" className="uk-margin-small-left">
                <li className="uk-open">
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">Обязательные пенсионные взносы (ОПВ) </a>
                    <div className="uk-accordion-content">
                      <label>
                        текущая сумма накоплений:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                      </label>
                    </div>
                </li>
                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">Обязательные профессиональные пенсионные взносы (ОППВ) </a>
                    <div className="uk-accordion-content">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                    </div>
                </li>
                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">Добровольные пенсионные взносы (ДПВ) </a>
                    <div className="uk-accordion-content">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                    </div>
                </li>
            </ul>
            <button type="submit" className = "uk-button uk-button-primary">ssss</button>     
          </form>
        </div>
        
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
