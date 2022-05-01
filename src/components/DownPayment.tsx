import './DownPayment.css';

const DownPayment = () => {
  return (
    <div className="down-payment">
        <div className="dp">
            <label className='' >Down Payment</label>
        </div>
        <div className='minus'>-</div>
        <div className="dp-inputs">
            <input className='dp-percent outline-bot' type="text" />
            <input className='dp-dollar outline-bot' type="text" />
        </div>

    </div>
  )
}

export default DownPayment