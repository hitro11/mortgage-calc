import { useEffect, useState } from 'react';
import Principal from './components/Principal.tsx';
import DownPayment from './components/DownPayment.tsx';
import TotalMortgage from './components/TotalMortgage.tsx';
import Amortization from './components/Amortization.tsx';
import Rate from './components/Rate.tsx';
import TotalPayment from './components/TotalPayment.tsx';
import './App.css';

import "@fontsource/roboto"; // Defaults to weight 400.

function App() {

  // state
  const [principal, setPrincipal] = useState(() => { return '500000'; });
  const [downPay, setDownPay] = useState(() => { return ''; });
  const [downPayP, setDownPayP] = useState(() => { return ''; });
  const [amort, setAmort] = useState(() => { return '25'; });
  const [rate, setRate] = useState(() => { return ''; });
  const [disabled, setDisabled] = useState(() => { return true; });
  const [totalMort, setTotalMort] = useState(() => { return ''; });
  const [totalPay, settotalPay] = useState(() => { return ''; });


  useEffect(() => {
    if (!disabled) {
      setDownPayP('10.00');
      setRate('2.00');  
    }
  }, [disabled]);
  
  // re-calculates mortgage payment when any of the listed states change
  useEffect(() => {
    if (!disabled) {
      const period = 12 * amort;
      const percentageRate = (rate / 1200);
      const monthlyPay = (parseInt(totalMort) * percentageRate) / (1 - (Math.pow((1 + percentageRate), period * -1)));
      settotalPay(parseInt(monthlyPay));
    }
  }, [totalMort, rate, amort]);

  useEffect(() => {
    if (!disabled) {
      console.log('downpay % changed');
      setDownPay(parseInt(principal * (downPayP/100)));
      setTotalMort(principal - downPay);
    }
  }, [downPayP, principal]);

  useEffect(() => {
    if (!disabled) {
      console.log('downpay changed');
      let tempDPP = ((downPay / principal) * 100).toString();
      tempDPP = (tempDPP.indexOf(".") >= 0) ? (tempDPP.substr(0, tempDPP.indexOf(".")) + tempDPP.substr(tempDPP.indexOf("."), 3)) : tempDPP;
      setDownPayP(tempDPP);
      setTotalMort(principal - downPay);
    }
  }, [downPay]);


  // removes letters and special chars from inputted string
  function numbersOnly(input) {
    return input.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
  }



  return (
    <div className="app">
      <div className="section section1">
        <Principal setDisabled={setDisabled} setPrincipal={setPrincipal} principal={principal} numbersOnly={numbersOnly}/>
      </div>
      <div className="section"> 
        <DownPayment disabled={disabled} downPay={downPay} downPayP={downPayP} setDownPay={setDownPay} setDownPayP={setDownPayP} numbersOnly={numbersOnly} />        
      </div>
      <div className="section-bg">
        <TotalMortgage disabled={disabled} totalMort={totalMort} setTotalMort={setTotalMort} />        
      </div>
      <div className="section section-amort-rate">
        <Amortization disabled={disabled} amort={amort} setAmort={setAmort} />
        <Rate disabled={disabled} rate={rate} setRate={setRate} numbersOnly={numbersOnly}/>
      </div>
      <div className="section-bg">
        <TotalPayment totalPay={totalPay} />
      </div>


    </div>
  );
}

export default App;
