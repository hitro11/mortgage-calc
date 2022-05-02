import './AskingPrice.css';

const AskingPrice: React.FC = (props) => {
  
  // doesn't allow negative values
  const validateInput = (event) => {
    const value = event.target.value;
    
    // todo: check ff leading char is string
    event.target.value = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    if (parseInt(value) < 1) {
      event.target.value = '';
    }
  }

  // enables all inputs when 'go' button is clicked  
  const onClick = () => {
    props.setDisabled(false);
  }
  
  return (
    <div className='AskingPrice container'>
      <label className='label' htmlFor="asking-price-input">Asking <br/> Price</label>
      <span className="prefix">$
        <input className='outline-bot' name='asking-price-input' type="text" onChange={validateInput} defaultValue={'1'}
        />
      </span>
      <button className='btn' onClick={onClick}>go</button>
    </div>
  )
}

export default AskingPrice