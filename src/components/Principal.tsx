import './Principal.css';


interface Props {
  principal: string,
  setPrincipal,
  setDisabled,
  numbersOnly
}

const AskingPrice: React.FC<Props> = (props) => {
  
  // doesn't allow negative values
  const setPrincipal = (e) => {

    // e.target.value = e.target.value.replace(',', '');
    e.target.value = props.numbersOnly(e.target.value);

    if (parseInt(e.target.value) < 1 || e.target.value === '')  {
      e.target.value = '0';
    }

    props.setPrincipal(e.target.value);
  }

  // enables all inputs when 'go' button is clicked  
  const goClicked = () => {
    props.setDisabled(false);
  }
  
  return (
    <div className='container'>
      <label className='label item1' htmlFor="principal">Asking Price</label>
      <div className="input-container outline-bot">
        <span className="prefix">$</span>
        <input className='principal-input' name='principal' type="text" onChange={setPrincipal} data-testid="principal"
               value={props.principal} maxLength={9} />
      </div>
      <button className='btn' onClick={goClicked}>go</button>
    </div>
  )
}

export default AskingPrice