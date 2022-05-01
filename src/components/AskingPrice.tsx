import './AskingPrice.css';

const AskingPrice = () => {
  return (
    <div className='AskingPrice container'>
      <label className='label' htmlFor="asking-price-input">Asking <br/> Price</label>
      <input className='outline-bot' name='asking-price-input' type="text" />
      <button className='btn'>go</button>
    </div>
  )
}

export default AskingPrice