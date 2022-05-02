import { useEffect, useState } from 'react';
import AskingPrice from './components/AskingPrice.tsx';
import DownPayment from './components/DownPayment.tsx';
import TotalMortgage from './components/TotalMortgage.tsx';
import Amortization from './components/Amortization.tsx';
import Rate from './components/Rate.tsx';
import TotalPayment from './components/TotalPayment.tsx';
import './App.css';


function App() {

  // state
  const [price, setPrice] = useState(() => { return ''; });
  const [downPay, setDownPay] = useState(() => { return ''; });
  const [downPayP, setDownPayP] = useState(() => { return ''; });
  const [amort, setAmort] = useState(() => { return ''; });
  const [rate, setRate] = useState(() => { return ''; });
  const [disabled, setDisabled] = useState(() => { return true; });

  useEffect(() => {
    if (!disabled) {
      setDownPay('100000');
      setDownPayP('30.00');
      setRate('2.00');  
    }
  }, [disabled]);
  
  // re-calculates mortgage payment when any of the listed states change
  useEffect(() => {
    console.log('price calc');

  }, [price, rate, amort, downPay, downPayP ])

  return (
    <div className="App">
      <div className="section">
        <AskingPrice setDisabled={setDisabled} setPrice={setPrice} />
      </div>
      <div className="section">
        <DownPayment isDisabled={disabled} downPay={downPay} downPayP={downPayP}/>        
      </div>
      <div className="section-bg">
        <TotalMortgage isDisabled={disabled}/>        
      </div>
      <div className="section">
        <Amortization isDisabled={disabled} amort={amort} />
        <Rate isDisabled={disabled} rate={rate}/>
      </div>
      <div className="section-bg">
        <TotalPayment />
      </div>


    </div>
  );
}

export default App;
