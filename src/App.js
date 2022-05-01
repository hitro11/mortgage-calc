import './App.css';
import AskingPrice from './components/AskingPrice.tsx';
import DownPayment from './components/DownPayment.tsx';
import TotalMortgage from './components/TotalMortgage.tsx';
import Amortization from './components/Amortization.tsx';
import Rate from './components/Rate.tsx';
import TotalPayment from './components/TotalPayment.tsx';

function App() {
  return (
    <div className="App">
      <div className="section">
        <AskingPrice/>
      </div>
      <div className="section">
        <DownPayment/>        
      </div>
      <div className="section-bg">
        <TotalMortgage/>        
      </div>
      <div className="section">
        <Amortization/>
        <Rate/>
      </div>
      <div className="section-bg">
        <TotalPayment/>
      </div>


    </div>
  );
}

export default App;
