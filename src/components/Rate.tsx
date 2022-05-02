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
        <label htmlFor="" className="">Rate</label>
        <input className='rate outline-bottom no-outline' type="text" defaultValue={props.rate} onChange={changeHandler} disabled={props.disabled} />
    </div>
  )
}

export default Rate