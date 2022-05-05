import './TotalMortgage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals } from '@fortawesome/free-solid-svg-icons'

interface Props {
  totalMort: string,
  setTotalMort
}

const TotalMortgage: React.FC<Props> = (props) => {

  const validateInput = (e) => {
    console.log('totalMort: ', e.target.value);

    if (parseInt(e.target.value) < 0) {
      props.setTotalMort('0');
      console.log('settotalmort - new totalMort: ', props.totalMort );
      console.log('e.target.value: ', e.target.value );

    }
  }

  return (
    <div className='container'>
      <label className="label">Total Mortgage Required</label>
      <FontAwesomeIcon className='eq icon' icon={faEquals} size={'2xs'} />
      <div className="input-container read-only">
        <label className="prefix">$</label>
        <input type="text" readOnly className="blank no-border no-outline" maxLength={9} value={props.totalMort} onChange={validateInput} />
      </div>
    </div>
  )
}

export default TotalMortgage