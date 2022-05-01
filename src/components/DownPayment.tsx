import './DownPayment.css';

const DownPayment = () => {
  return (
    <div className="down-payment">
        <div className="dp">
            <label className='label' >Down Payment</label>
        </div>
        <div className="dp-minus">
            <h1 className='minus'>-</h1>

        </div>
        <div className="dp-inputs">
            <input className='dp-percent no-outline' type="text" />
            <input className='dp-dollar no-outline' type="text" />
        </div>

    </div>
  )
}

export default DownPayment