import './Rate.css';

interface Props {
  rate: string,
  setRate: Function,
  disabled: boolean
}

const Rate: React.FC<Props> = (props) => {

  const changeHandler = (event) => {
    console.log(parseFloat(event.target.value).toFixed(2));
    props.setRate(parseFloat(event.target.value).toFixed(2));
  }

  return (
    <div className='container'>
        <label htmlFor="" className="rateLabel item1">Rate</label>
        <div className="input-container">
          <input className='rate no-outline'  type="text" defaultValue={props.rate} maxLength={5} onChange={changeHandler} disabled={props.disabled} />
          <label className="suffix">%</label>
        </div>
    </div>
  )
}

export default Rate