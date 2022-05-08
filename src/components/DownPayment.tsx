import './DownPayment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

interface Props {
  downPay: string,
  downPayP: string,
  disabled: boolean,
  setDownPay: Function,
  setDownPayP: Function,
  numbersOnly: Function,
}

const DownPayment: React.FC<Props> = (props) => {

  const downPayPChange = (e) => {
    e.target.value = props.numbersOnly(e.target.value);    
    props.setDownPayP(e.target.value);
  }

  const downPayChange = (e) => {
    e.target.value = props.numbersOnly(e.target.value);
    props.setDownPay(e.target.value);
  }

  return (
    <div className="container">
        <div className="dp item1">
            <label>Down Payment</label>
        </div>
        <FontAwesomeIcon className='minus icon' icon={faMinus} size={'2xs'} />
        <div className="dp-inputs">
          <div className="input-container">
            <input className='dp-percent outline-bot' data-testid="dp-percent" type="text" minLength={4} maxLength={6} disabled={props.disabled} value={props.downPayP} onChange={downPayPChange} />
            <span className="suffix">%</span>
          </div>
          <div className="input-container">
            <span className="prefix">$</span>
            <input className='dp-dollar outline-bot' data-testid="dp-dollar" type="text" maxLength={9} disabled={props.disabled} value={props.downPay} onChange={downPayChange}  />
          </div>
        </div>
    </div>
  )
}

export default DownPayment