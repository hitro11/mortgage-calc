import './AskingPrice.css';

const AskingPrice = () => {
  return (
    <div className='AskingPrice'>
      <label className='label' htmlFor="asking-price-input">Asking Price</label>
      <input className='no-outline' name='asking-price-input' type="text" />
      <button className='btn'>go</button>
    </div>
  )
}

export default AskingPrice