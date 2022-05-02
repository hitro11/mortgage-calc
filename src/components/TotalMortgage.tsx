import './TotalMortgage.css'

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
    <div className='total-mortgage'>
      <label htmlFor="" className="label">Total Mortgage Required</label>
      <div className="eq">=</div>
      <input type="text" readOnly className="blank no-border no-outline" value={props.totalMort} onChange={validateInput} />
    </div>
  )
}

export default TotalMortgage