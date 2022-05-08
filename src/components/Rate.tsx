import './Rate.css';

interface Props {
  rate: string,
  setRate: Function,
  disabled: boolean,
  numbersOnly
}

const Rate: React.FC<Props> = (props) => {

  const rateChange = (e) => {
    e.target.value = props.numbersOnly(e.target.value);    
    props.setRate(e.target.value);
  }

  return (
    <div className='container rateContainer'>
        <label htmlFor="" className="rateLabel item1">Rate</label>
        <div className="input-container">
          <input className='rate no-outline'  type="text" value={props.rate} maxLength={5} onChange={rateChange} disabled={props.disabled} />
          <label className="suffix">%</label>
        </div>
    </div>
  )
}

export default Rate