import './App.css';
import AskingPrice from './components/AskingPrice.tsx';
import DownPayment from './components/DownPayment.tsx';

function App() {
  return (
    <div className="App">
      <div className="section">
        <AskingPrice className='section' />
      </div>
      <div className="section">
        <DownPayment className='section' />        
      </div>
    </div>
  );
}

export default App;
