import './Rate.css';

const Rate = (props) => {
  return (
    <div className='container'>
        <label htmlFor="" className="label">Rate</label>
        <input className='rate outline-bottom no-outline' type="text" defaultValue={props.rate} />
    </div>
  )
}

export default Rate