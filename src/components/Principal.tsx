import './Principal.css';


interface Props {
  principal: string,
  setPrincipal,
  setDisabled
}

const AskingPrice: React.FC<Props> = (props) => {
  
  // doesn't allow negative values
  const setPrincipal = (event) => {

    event.target.value = event.target.value.replace(',', '');
    
    // todo: check if leading char is string
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');

    if (parseInt(event.target.value) < 1) {
      event.target.value = '';
    }

    props.setPrincipal(event.target.value);
  }

  const display: string = (value: string) => {

    return '0';
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
        <input className='principal-input' name='principal' type="text" onChange={setPrincipal}
               value={props.principal} maxLength={9} />
      </div>
      <button className='btn' onClick={goClicked}>go</button>
    </div>
  )
}

export default AskingPrice