import './App.css';
import AskingPrice from './components/AskingPrice.tsx';
import DownPayment from './components/DownPayment.tsx';
import TotalMortgage from './components/TotalMortgage.tsx';
import Amortization from './components/Amortization.tsx';
import Rate from './components/Rate.tsx';

function App() {
  return (
    <div className="App">
      <div className="section">
        <AskingPrice className='section' />
      </div>
      <div className="section">
        <DownPayment className='section' />        
      </div>
      <div className="section-bg">
        <TotalMortgage className='section' />        
      </div>
      <div className="section">
        <Amortization/>
        <Rate/>
      </div>

    </div>
  );
}

export default App;
