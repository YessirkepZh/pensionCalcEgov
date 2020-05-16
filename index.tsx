import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

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

class App extends Component<AppProps, AppState  > {
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

  render() {
    return (
      <div className="uk-container uk-container-small uk-margin-small-top">
      
     
        <div className="uk-card uk-card-default">
          <button className = "uk-button uk-button-primary">ssss</button>     

        </div>
        
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
