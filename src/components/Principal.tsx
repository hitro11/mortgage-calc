import './Principal.css';


interface Props {
  principal: string,
  setPrincipal,
  setDisabled
}

const AskingPrice: React.FC<Props> = (props) => {
  
  // doesn't allow negative values
  const setPrincipal = (event) => {
    
    // todo: check if leading char is string
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    if (parseInt(event.target.value) < 1) {
      event.target.value = '';
    }

    props.setPrincipal(event.target.value);
  }

  // enables all inputs when 'go' button is clicked  
  const goClicked = () => {
    props.setDisabled(false);
  }
  
  return (
    <div className='AskingPrice container'>
      <label className='label' htmlFor="asking-price-input">Asking <br/> Price</label>
      <span className="prefix">$
        <input className='outline-bot' name='asking-price-input' type="text" onChange={setPrincipal} value={props.principal}
        />
      </span>
      <button className='btn' onClick={goClicked}>go</button>
    </div>
  )
}

export default AskingPrice